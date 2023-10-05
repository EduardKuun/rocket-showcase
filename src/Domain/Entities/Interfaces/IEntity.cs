using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities.Interfaces;

public interface IEntity
{
}

public interface IEntity<TId> : IEntity
{
    TId Id { get; }
}
