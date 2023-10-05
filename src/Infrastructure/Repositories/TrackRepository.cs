using Rocket.Application.Repositories;
using Rocket.Infrastructure.Persistence.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Rocket.Infrastructure.Repositories;

public class TrackRepository : ITrackRepository
{
    private readonly ApplicationDbContext _db;

    public TrackRepository(ApplicationDbContext db)
    {
        _db = db;
    }
}