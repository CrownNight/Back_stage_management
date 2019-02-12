using Management.Database.Dto;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Management.Database
{
    public class DataContext:DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }
        private string Connection;

        public DataContext(string Connection) => this.Connection = Connection;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!string.IsNullOrEmpty(Connection))
                optionsBuilder.UseMySQL(Connection);
        }

        public DbSet<TextDto> artical { get; set; }

        public DbSet<Infos> Infos { get; set; }


    }
}
