using Management.Models;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Management
{
    public class AppConfig
    {
        /// <summary>
        /// Mysql数据库连接
        /// </summary>
        public static string MysqlConnection { get; } = ConfigurationManager.Configuration.GetConnectionString("MysqlConnection");
    }
}
