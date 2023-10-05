using Microsoft.EntityFrameworkCore;
using Rocket.Domain.Entities;
using Rocket.Infrastructure.Persistence.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Rocket.Infrastructure.Persistence.Context;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions options) : base(options)
    {

    }
    public DbSet<Region> Regions => Set<Region>();
    public DbSet<Track> Tracks => Set<Track>();
    public DbSet<TrackRating> TrackRatings => Set<TrackRating>();


    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.HasDefaultSchema(SchemaNames.Catalog);

    }

}
