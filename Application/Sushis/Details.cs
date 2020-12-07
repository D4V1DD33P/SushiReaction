using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;


namespace Application.Sushis
{
    public class Details
    {
        public class Query : IRequest<Sushi> 
        { 
            public Guid Id { get; set;}
        }
        public class Handler : IRequestHandler<Query, Sushi>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Sushi> Handle(Query request, CancellationToken cancellationToken)
            {
                var sushi = await _context.Sushis.FindAsync(request.Id); 
                return sushi; 
            }
        }
    }
}