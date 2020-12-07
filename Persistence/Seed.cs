using System;
using System.Collections.Generic;
using System.Linq;
using Domain;

namespace Persistence
{
    public class Seed
    {
        public static void SeedData(DataContext context)
        {
            if(!context.Sushis.Any())
            {
                var activities = new List<Sushi>
                {
                    new Sushi
                    {
                        Name = "Ouza",
                        Description = "All good inside",
                        Category = "drinks",
                        Type = "Paris",
                    },
                    new Sushi
                    {
                        Name = "A+ Style",
                        Description = "Signature sushi",
                        Category = "culture",
                        Type = "Paris"
                    }
                };
                context.Sushis.AddRange(activities);
                context.SaveChanges();
            }
        }
    }
}