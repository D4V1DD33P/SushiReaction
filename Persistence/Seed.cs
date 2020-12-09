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
                var sushis = new List<Sushi>
                {
                    new Sushi
                    {
                        Name = "Ouza",
                        Description = "All good inside",
                        Category = "uramaki",
                        Number = 62,
                        Rating = 5
                    },
                    new Sushi
                    {
                        Name = "A+ Style",
                        Description = "Signature sushi",
                        Category = "nigiri",
                        Number = 56,
                        Rating = 4
                    }
                };
                context.Sushis.AddRange(sushis);
                context.SaveChanges();
            }
        }
    }
}