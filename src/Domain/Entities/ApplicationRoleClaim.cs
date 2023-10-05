using Microsoft.AspNetCore.Identity;

namespace Rocket.Domain.Entities;

public class ApplicationRoleClaim : IdentityRoleClaim<Guid>
{
    public string? CreatedBy { get; init; }
    public DateTime CreatedOn { get; init; }
}