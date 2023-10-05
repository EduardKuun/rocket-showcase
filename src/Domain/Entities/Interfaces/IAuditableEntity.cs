using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities.Interfaces;

public interface IAuditableEntity
{
    public Guid CreatedBy { get; set; }
    public DateTimeOffset CreatedOn { get; }
    public Guid LastModifiedBy { get; set; }
    public DateTimeOffset? LastModifiedOn { get; set; }
}