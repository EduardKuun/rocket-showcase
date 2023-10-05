using Rocket.Application.Repositories;
using Rocket.Infrastructure.Persistence.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Rocket.Infrastructure.Repositories;

public class TrackRatingRepository : ITrackRatingRepository
{
    private readonly ApplicationDbContext _db;

    public TrackRatingRepository(ApplicationDbContext db)
    {
        _db = db;
    }
}