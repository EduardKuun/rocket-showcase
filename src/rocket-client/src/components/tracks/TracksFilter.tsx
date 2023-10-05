import {
  Box,
  Card,
  Checkbox,
  Chip,
  Divider,
  FormControlLabel,
  Input,
  Slider,
  Stack,
  TextField,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { ChangeEvent, useEffect, useMemo, useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import { Query, Scalars, Track } from '@/__generated__/graphql';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import GridViewIcon from '@mui/icons-material/GridView';
import ListIcon from '@mui/icons-material/List';
import { TracksViewType } from '@/lib/types/TracksViewType';
import TracksGallery from './TracksGallery';
import Tooltip from '@mui/material/Tooltip';
import MultiSelect from '@/components/MultiSelect';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import { rootConfig } from '@/rootConfig';
import { FaMapMarkedAlt } from 'react-icons/fa';
import CustomMap from '../CustomMap';
import { ICoordinate } from '@/lib/models/custom/ICoordinate';
import { getTracksWithinRadius } from '@/lib/trackUtil';
import TracksList from './TracksList';
import useLocation from '@/hooks/useLocation';
import useSettings from '@/hooks/useSettings';

const GET_REGIONS = gql`
  query GetRegions {
    regions {
      name
      id
    }
  }
`;
const GET_TRACKS = gql`
  query Tracks($tracksInput: TrackFilterInput) {
    tracks(where: $tracksInput) {
      name
      id
      latitude
      longitude
      region {
        name
      }
      ratings {
        difficulty
        type
      }
    }
  }
`;

function useTrackFilters() {
  const [filters, _updateFilter] = useState<any>({
    name: undefined,
    regionId: undefined,
  });

  const updateFilter = (filterType: 'name' | 'regionId', value: any) => {
    _updateFilter((prev: any) => ({
      ...prev,
      [filterType]: filterType === 'name' ? { contains: value } : { in: value },
    }));
  };

  return {
    models: { filters },
    operations: { updateFilter },
  };
}

interface Props {}

const TracksFilter = ({}: Props) => {
  const { operations, models } = useTrackFilters();
  const [viewType, setViewType] = useState<TracksViewType>('Grid');
  const { settings, saveSettings } = useSettings();

  const {
    loading: regionsLoading,
    error: regionsError,
    data: regionsData,
  } = useQuery<Query>(GET_REGIONS);
  const {
    loading: tracksLoading,
    error: tracksError,
    data: tracksData,
    refetch: tracksRefetch,
    startPolling: tracksStartPolling,
  } = useQuery<Query>(GET_TRACKS);
  const [rangeLimited, setRangeLimited] = useState(true);
  const regions = useMemo(() => regionsData?.regions || [], [regionsData]);
  const tracks = useMemo(() => tracksData?.tracks || [], [tracksData]);
  const [nearbyTracks, setNearbyTracks] = useState<Track[]>([]);
  const [searchRadius, setSearchRadius] = useState(settings.trackSearchRadius);
  const { myLocation } = useLocation();

  useEffect(() => {
    setSearchRadius(settings.trackSearchRadius);
  }, [settings.trackSearchRadius]);

  useEffect(() => {
    tracksStartPolling(rootConfig.graphqlPollInterval);
  }, []);

  useEffect(() => {
    setNearbyTracks(
      myLocation && rangeLimited ? getTracksWithinRadius(tracks, myLocation, searchRadius) : tracks,
    );
  }, [myLocation, searchRadius, rangeLimited, tracks]);

  const handleRadiusChange = (value: number) => {
    saveSettings({
      ...settings,
      trackSearchRadius: value,
    });
  };

  return (
    <Box>
      <Card>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            p: 2,
          }}
        >
          <IconButton
            onClick={() =>
              tracksRefetch({
                tracksInput: { name: models.filters.name, regionId: models.filters.regionId },
              })
            }
          >
            <SearchIcon />
          </IconButton>

          <Box
            sx={{
              flexGrow: 1,
              ml: 3,
            }}
          >
            <Input
              disableUnderline
              fullWidth
              onChange={(e) => operations.updateFilter('name', e.target.value)}
              type='string'
              placeholder='Search by name'
            />
          </Box>
          <Box>
            <Box
              sx={{
                borderRadius: 1,
                border: 1,
                borderColor: 'divider',
                display: 'flex',
                p: 0.85,
                mr: 1,
              }}
            >
              <Tooltip title='Grid View' placement='top'>
                <span>
                  <IconButton
                    onClick={() => setViewType('Grid')}
                    sx={{
                      ...(viewType === 'Grid' && {
                        bgcolor: 'background.default',
                        color: 'text.primary',
                      }),
                      mr: 0.5,
                    }}
                  >
                    <GridViewIcon />
                  </IconButton>
                </span>
              </Tooltip>

              <Tooltip title='List View' placement='top'>
                <span>
                  <IconButton
                    onClick={() => setViewType('List')}
                    sx={{
                      ...(viewType === 'List' && {
                        bgcolor: 'background.default',
                        color: 'text.primary',
                      }),
                      mr: 0.5,
                    }}
                  >
                    <ListIcon />
                  </IconButton>
                </span>
              </Tooltip>

              <Tooltip title='Map View' placement='top'>
                <span>
                  <IconButton
                    onClick={() => setViewType('Map')}
                    sx={{
                      ...(viewType === 'Map' && {
                        bgcolor: 'background.default',
                        color: 'text.primary',
                      }),
                      mr: 0.5,
                    }}
                  >
                    <FaMapMarkedAlt color='inherit' />
                  </IconButton>
                </span>
              </Tooltip>
            </Box>
          </Box>
          {viewType !== 'Map' && (
            <Box>
              <FormControl sx={{ width: 150 }}>
                <InputLabel>Sort By</InputLabel>
                <Select label='Sort By'>
                  <MenuItem>test</MenuItem>
                </Select>
              </FormControl>
            </Box>
          )}
        </Box>
        <Divider />
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexWrap: 'wrap',
            p: 2,
          }}
        >
          <Typography color='textSecondary' variant='body2'>
            No filters applied
          </Typography>
        </Box>
        <Divider />
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexWrap: 'wrap',
            p: 1,
          }}
        >
          <MultiSelect
            label='Region'
            options={regions.map((region) => ({
              label: region.name,
              value: region.id,
            }))}
            value={models.filters.regionId ? models.filters.regionId['in'] : []}
            onChange={(value) => operations.updateFilter('regionId', value)}
          />
          {myLocation && rangeLimited && (
            <Box sx={{ ml: 1 }}>
              <Stack spacing={2} direction='row' alignItems='center'>
                <TextField
                  size='small'
                  sx={{ width: 110, maxWidth: '100%' }}
                  value={searchRadius}
                  type='number'
                  InputProps={{
                    sx: {
                      bgcolor: 'background.paper',
                    },
                    endAdornment: <Typography>km</Typography>,
                    inputProps: { min: 50, max: 1000, step: 10 },
                  }}
                  onChange={(e) => handleRadiusChange(Number(e.target.value))}
                />

                <Slider
                  size='small'
                  value={searchRadius}
                  valueLabelDisplay='off'
                  onChange={(e, val) => handleRadiusChange(val as number)}
                  min={10}
                  step={10}
                  max={1000}
                  sx={{ width: 200, maxWidth: '100%' }}
                />
                <Typography variant='caption' color='textSecondary'>
                  {nearbyTracks.length} track(s) nearby
                </Typography>
              </Stack>
            </Box>
          )}

          <Box flexGrow={1} />
          {myLocation && (
            <FormControlLabel
              control={
                <Checkbox
                  checked={rangeLimited}
                  onChange={(e) => setRangeLimited(e.target.checked)}
                  value={rangeLimited}
                />
              }
              label={'Limit by range'}
            />
          )}
        </Box>
      </Card>
      {tracks.length > 0 && (
        <Box>
          {viewType === 'Grid' ? (
            <Box sx={{ mt: 3 }}>
              <TracksGallery tracks={nearbyTracks} />
            </Box>
          ) : viewType === 'List' ? (
            <Box sx={{ mt: 2 }}>
              <TracksList tracks={nearbyTracks} />
            </Box>
          ) : (
            <Box sx={{ mt: 3 }}>
              <CustomMap tracks={nearbyTracks} />
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
};

export default TracksFilter;
