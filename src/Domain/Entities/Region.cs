﻿using System.ComponentModel.DataAnnotations;

namespace Rocket.Domain.Entities;
public class Region
{
    public Guid Id { get; set; }

    public string Name { get; set; } = default!;

    public ICollection<Track>? Tracks { get; set; }
}
