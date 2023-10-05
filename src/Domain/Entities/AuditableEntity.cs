using Domain.Entities.Interfaces;

namespace Rocket.Domain.Entities;

public abstract class AuditableEntity : AuditableEntity<Guid>
{
}

public abstract class AuditableEntity<T> : BaseEntity<T>, IAuditableEntity
{
    public Guid CreatedBy { get; set; }
    public DateTimeOffset CreatedOn { get; private set; }
    public Guid LastModifiedBy { get; set; }
    public DateTimeOffset? LastModifiedOn { get; set; }
    public DateTimeOffset? DeletedOn { get; set; }
    public Guid? DeletedBy { get; set; }

    protected AuditableEntity()
    {
        CreatedOn = DateTimeOffset.Now;
        LastModifiedOn = DateTimeOffset.Now;
    }
}