using System.ComponentModel.DataAnnotations;

namespace Rocket.Domain.Entities;
public class Track
{
    public Guid Id { get; set; }

    public string Name { get; set; } = default!;

    public double Latitude { get; set; }

    public double Longitude { get; set; }

    public Guid RegionId { get; set; }

    public Region? Region { get; set; }

    public ICollection<TrackRating>? Ratings { get; set; }

}
