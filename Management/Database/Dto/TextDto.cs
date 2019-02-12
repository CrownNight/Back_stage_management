using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Management.Database.Dto
{
    public class TextDto
    {
        public TextDto()
        {
            Id = 0;
            Text = string.Empty;
        }

        [Required]
        [Key]
        public int Id { get; set; }

        public string Text { get; set; }
    }
}
