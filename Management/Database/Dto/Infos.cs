using System.ComponentModel.DataAnnotations;

namespace Management.Database.Dto
{
    public class Infos
    {
        public Infos()
        {
            Id = 0;
            Info = string.Empty;
        }

        [Required]
        [Key]
        public int Id { get; set; }

        public string Info { get; set; }
    }
}
