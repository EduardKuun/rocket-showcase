using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Text.Json;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using Rocket.Domain.Entities;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Rocket.Domain.Enums;

namespace Rocket.Infrastructure.Persistence.Configuration;

internal static class BaseConfig
{
    internal static JsonSerializerOptions GetSerializerOptions()
    {
        JsonSerializerOptions jsonSerializerOptions = new()
        {
            PropertyNamingPolicy = JsonNamingPolicy.CamelCase
        };
        jsonSerializerOptions.Converters.Add(new JsonStringEnumConverter());

        return jsonSerializerOptions;
    }
}

public class RegionConfig : IEntityTypeConfiguration<Region>
{
    public void Configure(EntityTypeBuilder<Region> builder)
    {

        builder.Property(e => e.Name)
            .IsRequired()
            .HasMaxLength(255);

        
    }
}

public class TrackConfig : IEntityTypeConfiguration<Track>
{
    public void Configure(EntityTypeBuilder<Track> builder)
    {

        builder.Property(e => e.Name)
            .IsRequired()
            .HasMaxLength(255);

        builder.HasOne(e => e.Region)
            .WithMany(e => e.Tracks)
            .HasForeignKey(e => e.RegionId)
            .OnDelete(DeleteBehavior.NoAction);
    }
}

public class TrackRatingConfig : IEntityTypeConfiguration<TrackRating>
{
    public void Configure(EntityTypeBuilder<TrackRating> builder)
    {
        builder.Property(d => d.Difficulty)
            .HasConversion(new EnumToStringConverter<TrackDifficulty>());

        builder.Property(d => d.Type)
            .HasConversion(new EnumToStringConverter<TrackType>());

        builder.HasOne(e => e.Track)
            .WithMany(e => e.Ratings)
            .HasForeignKey(e => e.TrackId)
            .OnDelete(DeleteBehavior.NoAction);
    }
}