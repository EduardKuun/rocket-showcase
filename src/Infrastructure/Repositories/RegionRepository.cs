using Rocket.Application.Repositories;
using Rocket.Infrastructure.Persistence.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Rocket.Infrastructure.Repositories;

public class RegionRepository : IRegionRepository
{
    private readonly ApplicationDbContext _db;

    public RegionRepository(ApplicationDbContext db)
    {
        _db = db;
    }
}