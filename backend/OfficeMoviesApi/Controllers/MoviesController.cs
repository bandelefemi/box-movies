using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using MovieSearchDatabase;

namespace OfficeMoviesApi.Controllers
{
    [Route("/api/movieapi")]
    [ApiController]

    public class MovieController : ControllerBase
    {
        [HttpGet]

        public IEnumerable<Movie> GetMovies()
        {
            return new List<Movie>
            {
                new Movie{Id=1, Title="Resident evil"},
                new Movie{Id=2, Title="Suits"},
                new Movie{Id=3, Title="Gods of Egypt"}
            };
        }
    }
}