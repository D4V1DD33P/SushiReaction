using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Sushis
{
    public class List
    {
        public class Query : IRequest<List<Sushi>> { }
        public class Handler : IRequestHandler<Query, List<Sushi>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Sushi>> Handle(Query request, CancellationToken cancellationToken)
            {
                var sushis = await _context.Sushis.ToListAsync(); 
                return sushis; 
            }
        }
    }
}