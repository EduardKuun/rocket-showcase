/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  UUID: any;
};

export type FloatOperationFilterInput = {
  eq?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  neq?: InputMaybe<Scalars['Float']>;
  ngt?: InputMaybe<Scalars['Float']>;
  ngte?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  nlt?: InputMaybe<Scalars['Float']>;
  nlte?: InputMaybe<Scalars['Float']>;
};

export type ListFilterInputTypeOfTrackFilterInput = {
  all?: InputMaybe<TrackFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<TrackFilterInput>;
  some?: InputMaybe<TrackFilterInput>;
};

export type ListFilterInputTypeOfTrackRatingFilterInput = {
  all?: InputMaybe<TrackRatingFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<TrackRatingFilterInput>;
  some?: InputMaybe<TrackRatingFilterInput>;
};

export type Query = {
  __typename?: 'Query';
  regions: Array<Region>;
  trackById?: Maybe<Track>;
  trackRatings: Array<TrackRating>;
  tracks: Array<Track>;
};


export type QueryRegionsArgs = {
  order?: InputMaybe<Array<RegionSortInput>>;
  where?: InputMaybe<RegionFilterInput>;
};


export type QueryTrackByIdArgs = {
  id: Scalars['UUID'];
};


export type QueryTrackRatingsArgs = {
  order?: InputMaybe<Array<TrackRatingSortInput>>;
  where?: InputMaybe<TrackRatingFilterInput>;
};


export type QueryTracksArgs = {
  order?: InputMaybe<Array<TrackSortInput>>;
  where?: InputMaybe<TrackFilterInput>;
};

export type Region = {
  __typename?: 'Region';
  id: Scalars['UUID'];
  name: Scalars['String'];
  tracks?: Maybe<Array<Track>>;
};

export type RegionFilterInput = {
  and?: InputMaybe<Array<RegionFilterInput>>;
  id?: InputMaybe<UuidOperationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<RegionFilterInput>>;
  tracks?: InputMaybe<ListFilterInputTypeOfTrackFilterInput>;
};

export type RegionSortInput = {
  id?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
};

export enum SortEnumType {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StringOperationFilterInput = {
  and?: InputMaybe<Array<StringOperationFilterInput>>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ncontains?: InputMaybe<Scalars['String']>;
  nendsWith?: InputMaybe<Scalars['String']>;
  neq?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  nstartsWith?: InputMaybe<Scalars['String']>;
  or?: InputMaybe<Array<StringOperationFilterInput>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Track = {
  __typename?: 'Track';
  id: Scalars['UUID'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  name: Scalars['String'];
  ratings?: Maybe<Array<TrackRating>>;
  region?: Maybe<Region>;
  regionId: Scalars['UUID'];
};

export enum TrackDifficulty {
  Advanced = 'ADVANCED',
  Beginner = 'BEGINNER',
  Easy = 'EASY',
  Intermediate = 'INTERMEDIATE'
}

export type TrackDifficultyOperationFilterInput = {
  eq?: InputMaybe<TrackDifficulty>;
  in?: InputMaybe<Array<TrackDifficulty>>;
  neq?: InputMaybe<TrackDifficulty>;
  nin?: InputMaybe<Array<TrackDifficulty>>;
};

export type TrackFilterInput = {
  and?: InputMaybe<Array<TrackFilterInput>>;
  id?: InputMaybe<UuidOperationFilterInput>;
  latitude?: InputMaybe<FloatOperationFilterInput>;
  longitude?: InputMaybe<FloatOperationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<TrackFilterInput>>;
  ratings?: InputMaybe<ListFilterInputTypeOfTrackRatingFilterInput>;
  region?: InputMaybe<RegionFilterInput>;
  regionId?: InputMaybe<UuidOperationFilterInput>;
};

export type TrackRating = {
  __typename?: 'TrackRating';
  comment?: Maybe<Scalars['String']>;
  difficulty: TrackDifficulty;
  id: Scalars['UUID'];
  track?: Maybe<Track>;
  trackId: Scalars['UUID'];
  type: TrackType;
};

export type TrackRatingFilterInput = {
  and?: InputMaybe<Array<TrackRatingFilterInput>>;
  comment?: InputMaybe<StringOperationFilterInput>;
  difficulty?: InputMaybe<TrackDifficultyOperationFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  or?: InputMaybe<Array<TrackRatingFilterInput>>;
  track?: InputMaybe<TrackFilterInput>;
  trackId?: InputMaybe<UuidOperationFilterInput>;
  type?: InputMaybe<TrackTypeOperationFilterInput>;
};

export type TrackRatingSortInput = {
  comment?: InputMaybe<SortEnumType>;
  difficulty?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  track?: InputMaybe<TrackSortInput>;
  trackId?: InputMaybe<SortEnumType>;
  type?: InputMaybe<SortEnumType>;
};

export type TrackSortInput = {
  id?: InputMaybe<SortEnumType>;
  latitude?: InputMaybe<SortEnumType>;
  longitude?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
  region?: InputMaybe<RegionSortInput>;
  regionId?: InputMaybe<SortEnumType>;
};

export enum TrackType {
  CrossCountry = 'CROSS_COUNTRY',
  Enduro = 'ENDURO',
  EnduroCross = 'ENDURO_CROSS',
  Motocross = 'MOTOCROSS'
}

export type TrackTypeOperationFilterInput = {
  eq?: InputMaybe<TrackType>;
  in?: InputMaybe<Array<TrackType>>;
  neq?: InputMaybe<TrackType>;
  nin?: InputMaybe<Array<TrackType>>;
};

export type UuidOperationFilterInput = {
  eq?: InputMaybe<Scalars['UUID']>;
  gt?: InputMaybe<Scalars['UUID']>;
  gte?: InputMaybe<Scalars['UUID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  lt?: InputMaybe<Scalars['UUID']>;
  lte?: InputMaybe<Scalars['UUID']>;
  neq?: InputMaybe<Scalars['UUID']>;
  ngt?: InputMaybe<Scalars['UUID']>;
  ngte?: InputMaybe<Scalars['UUID']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  nlt?: InputMaybe<Scalars['UUID']>;
  nlte?: InputMaybe<Scalars['UUID']>;
};

export type ContextTracksQueryVariables = Exact<{ [key: string]: never; }>;


export type ContextTracksQuery = { __typename?: 'Query', tracks: Array<{ __typename?: 'Track', name: string, latitude: number, longitude: number, ratings?: Array<{ __typename?: 'TrackRating', difficulty: TrackDifficulty, type: TrackType }> | null }> };

export type GetRegionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRegionsQuery = { __typename?: 'Query', regions: Array<{ __typename?: 'Region', name: string, id: any }> };

export type TracksQueryVariables = Exact<{
  tracksInput?: InputMaybe<TrackFilterInput>;
}>;


export type TracksQuery = { __typename?: 'Query', tracks: Array<{ __typename?: 'Track', name: string, id: any, latitude: number, longitude: number, region?: { __typename?: 'Region', name: string } | null, ratings?: Array<{ __typename?: 'TrackRating', difficulty: TrackDifficulty, type: TrackType }> | null }> };

export type GetTrackByIdQueryVariables = Exact<{
  id: Scalars['UUID'];
}>;


export type GetTrackByIdQuery = { __typename?: 'Query', trackById?: { __typename?: 'Track', name: string, id: any, latitude: number, longitude: number, ratings?: Array<{ __typename?: 'TrackRating', difficulty: TrackDifficulty, type: TrackType, comment?: string | null }> | null, region?: { __typename?: 'Region', name: string } | null } | null };


export const ContextTracksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ContextTracks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tracks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"ratings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"difficulty"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}}]} as unknown as DocumentNode<ContextTracksQuery, ContextTracksQueryVariables>;
export const GetRegionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetRegions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"regions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<GetRegionsQuery, GetRegionsQueryVariables>;
export const TracksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Tracks"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tracksInput"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"TrackFilterInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tracks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tracksInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"region"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ratings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"difficulty"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}}]} as unknown as DocumentNode<TracksQuery, TracksQueryVariables>;
export const GetTrackByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTrackById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"trackById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"ratings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"difficulty"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"comment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"region"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetTrackByIdQuery, GetTrackByIdQueryVariables>;