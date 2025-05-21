using Entities.Entities;
using Microsoft.EntityFrameworkCore;
using Pokemon.Repositorys;
using Pokemon.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
var connectionString = builder.Configuration.GetConnectionString("Default");

// Registrar el DbContext con la cadena de conexión
builder.Services.AddDbContext<CartaspokemonContext>(options =>
    options.UseSqlServer(connectionString));

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowSpecificOrigin",
        policy => policy.WithOrigins("http://localhost:4200")
                        .AllowAnyMethod()
                        .AllowAnyHeader());
});
builder.Services.AddScoped<CartasService>();
// Obtener la cadena de conexión

builder.Services.AddScoped<CombateService>();
builder.Services.AddScoped<JugadorService>();
builder.Services.AddScoped<CombateRepository>();


var app = builder.Build();
app.UseCors("AllowSpecificOrigin");
app.UseStaticFiles();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
  app.UseSwagger();
  app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
