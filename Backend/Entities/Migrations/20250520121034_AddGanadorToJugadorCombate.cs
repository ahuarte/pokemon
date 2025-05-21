using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Entities.Migrations
{
    /// <inheritdoc />
    public partial class AddGanadorToJugadorCombate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "GANADOR",
                table: "JUGADOR_COMBATE",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AlterColumn<int>(
                name: "TURNO",
                table: "COMBATE",
                type: "int",
                nullable: false,
                defaultValue: 1,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true,
                oldDefaultValue: 1);

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

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_COMBATE_JUGADOR_JugadorIdJugador",
                table: "COMBATE");

            migrationBuilder.DropIndex(
                name: "IX_COMBATE_JugadorIdJugador",
                table: "COMBATE");

            migrationBuilder.DropColumn(
                name: "GANADOR",
                table: "JUGADOR_COMBATE");

            migrationBuilder.DropColumn(
                name: "JugadorIdJugador",
                table: "COMBATE");

            migrationBuilder.AlterColumn<int>(
                name: "TURNO",
                table: "COMBATE",
                type: "int",
                nullable: true,
                defaultValue: 1,
                oldClrType: typeof(int),
                oldType: "int",
                oldDefaultValue: 1);
        }
    }
}
