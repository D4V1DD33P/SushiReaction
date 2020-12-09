using System;

namespace Domain
{
    public class Sushi
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Category { get; set; }
        public int Number { get; set; }
        public int Rating { get; set; }
    }
}