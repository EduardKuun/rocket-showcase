using Microsoft.AspNetCore.Cors.Infrastructure;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Rocket.Application.Repositories;
using Rocket.Infrastructure.Data;
using Rocket.Infrastructure.Persistence.Context;
using Rocket.Infrastructure.Repositories;

var builder = WebApplication.CreateBuilder(args);
ConfigurationManager configuration = builder.Configuration;

// Add services to the container.

builder.Services.AddControllers();

builder.Services.AddCors(opt => opt.AddPolicy("CorsPolicy", policy =>
    policy.AllowAnyHeader()
        .AllowAnyMethod()
        .AllowCredentials()
        .WithOrigins("http://localhost:3000")
));


builder.Services.AddScoped<IRegionRepository, RegionRepository>();
builder.Services.AddScoped<ITrackRepository, TrackRepository>();
builder.Services.AddGraphQLServer().AddQueryType<Query>().AddFiltering().AddSorting().AddProjections();

builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(configuration.GetConnectionString("ApplicationDb"), e => e.MigrationsAssembly("Migrators.MSSQL"))
);


var app = builder.Build();

// Configure the HTTP request pipeline.

app.UseHttpsRedirection();

app.UseAuthorization();

app.UseCors("CorsPolicy");

app.MapControllers();

app.MapGraphQL();

app.Run();
