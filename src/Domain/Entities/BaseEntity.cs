

using Domain.Entities.Interfaces;
using System.ComponentModel.DataAnnotations;

namespace Rocket.Domain.Entities;

public abstract class BaseEntity : BaseEntity<Guid>
{
    protected BaseEntity() => Id = Guid.NewGuid();
}

public abstract class BaseEntity<TId> : IEntity<TId>
{
    [Key]
    public TId Id { get; protected set; } = default!;
}