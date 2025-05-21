using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Entities.Entities;

public partial class CartaspokemonContext : DbContext
{
    public CartaspokemonContext()
    {
    }

    public CartaspokemonContext(DbContextOptions<CartaspokemonContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Cartum> Carta { get; set; }

    public virtual DbSet<Combate> Combates { get; set; }

    public virtual DbSet<Jugador> Jugadors { get; set; }

    public virtual DbSet<JugadorCombate> JugadorCombates { get; set; } = null!;

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Cartum>(entity =>
        {
            entity.HasKey(e => e.IdCarta).HasName("PK__CARTA__6F4C544FED4EF611");

            entity.ToTable("CARTA");

            entity.Property(e => e.IdCarta).HasColumnName("ID_CARTA");
            entity.Property(e => e.Bloqueo)
                .HasDefaultValue(1)
                .HasColumnName("BLOQUEO");
            entity.Property(e => e.Danyo)
                .HasDefaultValue(1)
                .HasColumnName("DANYO");
            entity.Property(e => e.Hp)
                .HasDefaultValue(5)
                .HasColumnName("HP");
            entity.Property(e => e.ImagenCarta)
                .HasMaxLength(255)
                .HasColumnName("IMAGEN_CARTA");
            entity.Property(e => e.Municion)
                .HasDefaultValue(3)
                .HasColumnName("MUNICION");
            entity.Property(e => e.NombreCarta)
                .HasMaxLength(255)
                .HasColumnName("NOMBRE_CARTA");
        });

        modelBuilder.Entity<Combate>(entity =>
        {
            entity.HasKey(e => e.IdCombate).HasName("PK__COMBATE__E380D5BA4CC296F3");

            entity.ToTable("COMBATE");

            entity.Property(e => e.IdCombate).HasColumnName("ID_COMBATE");
            entity.Property(e => e.Turno)
                .HasDefaultValue(1)
                .HasColumnName("TURNO");

        });

        modelBuilder.Entity<Jugador>(entity =>
        {
            entity.HasKey(e => e.IdJugador).HasName("PK__JUGADOR__14B5F6591E1C2CD6");

            entity.ToTable("JUGADOR");

            entity.Property(e => e.IdJugador).HasColumnName("ID_JUGADOR");
            entity.Property(e => e.Avatar)
                .HasMaxLength(255)
                .HasColumnName("AVATAR");
            entity.Property(e => e.IdCarta).HasColumnName("ID_CARTA");
            entity.Property(e => e.NombreJugador)
                .HasMaxLength(255)
                .HasColumnName("NOMBRE_JUGADOR");

            entity.HasOne(d => d.IdCartaNavigation).WithMany(p => p.Jugadors)
                .HasForeignKey(d => d.IdCarta)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_JUGADOR_CARTA");
        });
        modelBuilder.Entity<JugadorCombate>(jc =>
        {
            jc.ToTable("JUGADOR_COMBATE");

            jc.HasKey(x => new { x.IdCombate, x.IdJugador })
              .HasName("PK_JUGADOR_COMBATE");

            jc.Property(x => x.IdCombate).HasColumnName("ID_COMBATE");
            jc.Property(x => x.IdJugador).HasColumnName("ID_JUGADOR");
            jc.Property(x => x.Ganador)
              .HasColumnName("GANADOR")
              .HasDefaultValue(false);

            jc.HasOne(x => x.Combate)
              .WithMany(c => c.JugadorCombates)
              .HasForeignKey(x => x.IdCombate)
              .OnDelete(DeleteBehavior.ClientSetNull)
              .HasConstraintName("FK_COMBATE");

            jc.HasOne(x => x.Jugador)
              .WithMany(j => j.JugadorCombates)
              .HasForeignKey(x => x.IdJugador)
              .OnDelete(DeleteBehavior.ClientSetNull)
              .HasConstraintName("FK_JUGADOR_COMBATE");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
