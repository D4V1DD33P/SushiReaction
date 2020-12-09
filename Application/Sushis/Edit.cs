using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.Sushis
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }
            public string Name { get; set; }
            public string Description { get; set; }
            public string Category { get; set; }
            public int Number { get; set; }
            public int Rating { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var sushi = await _context.Sushis.FindAsync(request.Id);
                if (sushi == null)
                {
                    throw new Exception("Could not find sushi");
                }

                sushi.Name = request.Name ?? sushi.Name;
                sushi.Description = request.Description ?? sushi.Description;
                sushi.Category = request.Category ?? sushi.Category;
                sushi.Number = request.Number;
                sushi.Rating = request.Rating;

                var success = await _context.SaveChangesAsync() > 0;

                if (success) return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }
    }
}