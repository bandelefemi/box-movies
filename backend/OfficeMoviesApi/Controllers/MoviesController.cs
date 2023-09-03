// using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using MovieSearchDatabase;
using System.Linq;
using System.Collections.Generic;  
using System.Diagnostics; 
using System.Threading.Tasks;
using System;


namespace OfficeMoviesApi.Controllers
{
    [Route("/api/movieapi")]
    [ApiController]

    public class MovieController : ControllerBase
    {
        private readonly MovieDataAccessLayer objmovie;

        public MovieController()
        {
            objmovie = new MovieDataAccessLayer();
        }

        [HttpGet("getallmovies")]
        public IActionResult GetAllMovies()
        {
            List<Movie> lstMovie = objmovie.GetAllMovies().ToList();
            return Ok(lstMovie);
        }

        [HttpPost("createmovie")]
        public IActionResult CreateMovie([FromBody] Movie movie)
        {
            if (ModelState.IsValid)
            {
                objmovie.AddMovie(movie);
                return Ok("Movie created successfully.");
            }

            return BadRequest("Invalid movie data.");
        }
    }
}