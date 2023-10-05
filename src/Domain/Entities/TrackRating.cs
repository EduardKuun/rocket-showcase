using Rocket.Domain.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Rocket.Domain.Entities;
public class TrackRating
{
    public Guid Id { get; set; }

    public TrackDifficulty Difficulty { get; set; }

    public Guid TrackId { get; set; }

    public TrackType Type { get; set; }

    public string? Comment { get; set; }

    public Track? Track { get; set; }
}
