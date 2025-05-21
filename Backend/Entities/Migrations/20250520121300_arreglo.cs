using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Entities.Migrations
{
    /// <inheritdoc />
    public partial class arreglo : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_COMBATE_JUGADOR_JugadorIdJugador",
                table: "COMBATE");

            migrationBuilder.DropIndex(
                name: "IX_COMBATE_JugadorIdJugador",
                table: "COMBATE");

            migrationBuilder.DropColumn(
                name: "JugadorIdJugador",
                table: "COMBATE");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "JugadorIdJugador",
                table: "COMBATE",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_COMBATE_JugadorIdJugador",
                table: "COMBATE",
                column: "JugadorIdJugador");

            migrationBuilder.AddForeignKey(
                name: "FK_COMBATE_JUGADOR_JugadorIdJugador",
                table: "COMBATE",
                column: "JugadorIdJugador",
                principalTable: "JUGADOR",
                principalColumn: "ID_JUGADOR");
        }
    }
}
