using Back_end.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Back_end
{
    public class ApplicationDbContext: DbContext
    {
        //mapeando modelo
        DbSet<TarjetaCredito> TarjetaCredito { get; set; }
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }
    }
}
