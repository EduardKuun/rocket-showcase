using Microsoft.EntityFrameworkCore;
using Rocket.Domain.Entities;
using Rocket.Infrastructure.Persistence.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Rocket.Infrastructure.Data;

public class Query
{
    [UseProjection]
    [UseFiltering]
    [UseSorting]
    public IQueryable<Region> Regions([Service] ApplicationDbContext db) => db.Regions;

    [UseProjection]
    [UseFiltering]
    [UseSorting]
    public IQueryable<Track> Tracks([Service] ApplicationDbContext db) => db.Tracks.Include(e => e.Region).Include(e => e.Ratings);
    public Task<Track?> TrackById([Service] ApplicationDbContext db, Guid id) => db.Tracks.Include(e => e.Region).Include(e => e.Ratings).SingleOrDefaultAsync(e => e.Id == id);

    [UseProjection]
    [UseFiltering]
    [UseSorting]
    public IQueryable<TrackRating> TrackRatings([Service] ApplicationDbContext db) => db.TrackRatings.Include(e => e.Track);


}