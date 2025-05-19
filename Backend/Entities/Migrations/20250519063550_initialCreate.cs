using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Entities.Migrations
{
    /// <inheritdoc />
    public partial class initialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "CARTA",
                columns: table => new
                {
                    ID_CARTA = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NOMBRE_CARTA = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    HP = table.Column<int>(type: "int", nullable: true, defaultValue: 5),
                    MUNICION = table.Column<int>(type: "int", nullable: true, defaultValue: 3),
                    DANYO = table.Column<int>(type: "int", nullable: true, defaultValue: 1),
                    BLOQUEO = table.Column<int>(type: "int", nullable: true, defaultValue: 1),
                    IMAGEN_CARTA = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__CARTA__6F4C544FED4EF611", x => x.ID_CARTA);
                });

            migrationBuilder.CreateTable(
                name: "COMBATE",
                columns: table => new
                {
                    ID_COMBATE = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TURNO = table.Column<int>(type: "int", nullable: true, defaultValue: 1)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__COMBATE__E380D5BA4CC296F3", x => x.ID_COMBATE);
                });

            migrationBuilder.CreateTable(
                name: "JUGADOR",
                columns: table => new
                {
                    ID_JUGADOR = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NOMBRE_JUGADOR = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    AVATAR = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    ID_CARTA = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__JUGADOR__14B5F6591E1C2CD6", x => x.ID_JUGADOR);
                    table.ForeignKey(
                        name: "FK_JUGADOR_CARTA",
                        column: x => x.ID_CARTA,
                        principalTable: "CARTA",
                        principalColumn: "ID_CARTA");
                });

            migrationBuilder.CreateTable(
                name: "JUGADOR_COMBATE",
                columns: table => new
                {
                    ID_COMBATE = table.Column<int>(type: "int", nullable: false),
                    ID_JUGADOR = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_JUGADOR_COMBATE", x => new { x.ID_COMBATE, x.ID_JUGADOR });
                    table.ForeignKey(
                        name: "FK_COMBATE",
                        column: x => x.ID_COMBATE,
                        principalTable: "COMBATE",
                        principalColumn: "ID_COMBATE");
                    table.ForeignKey(
                        name: "FK_JUGADOR_COMBATE",
                        column: x => x.ID_JUGADOR,
                        principalTable: "JUGADOR",
                        principalColumn: "ID_JUGADOR");
                });

            migrationBuilder.CreateIndex(
                name: "IX_JUGADOR_ID_CARTA",
                table: "JUGADOR",
                column: "ID_CARTA");

            migrationBuilder.CreateIndex(
                name: "IX_JUGADOR_COMBATE_ID_JUGADOR",
                table: "JUGADOR_COMBATE",
                column: "ID_JUGADOR");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "JUGADOR_COMBATE");

            migrationBuilder.DropTable(
                name: "COMBATE");

            migrationBuilder.DropTable(
                name: "JUGADOR");

            migrationBuilder.DropTable(
                name: "CARTA");
        }
    }
}
