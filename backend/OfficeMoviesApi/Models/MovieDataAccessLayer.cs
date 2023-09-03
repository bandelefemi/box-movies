using System;    
using System.Collections.Generic;    
using System.Data;    
using System.Data.SqlClient;    
using System.Linq;    
using System.Threading.Tasks;    
    
namespace MovieSearchDatabase   
{    
    public class MovieDataAccessLayer    
    {    
        string connectionString = "Server=localhost; Database=master; User Id=SA; Password=SFY3Uwz5@hHib%j;";    
    
        //To View all movie details      
        public IEnumerable<Movie> GetAllMovies()    
        {    
            List<Movie> lstmovie = new List<Movie>();    
    
            using (SqlConnection con = new SqlConnection(connectionString))    
            {    
                SqlCommand cmd = new SqlCommand("spGetAllMovies", con);    
                cmd.CommandType = CommandType.StoredProcedure;    
    
                con.Open();    
                SqlDataReader rdr = cmd.ExecuteReader();    
    
                while (rdr.Read())    
                {    
                    Movie movie = new Movie();    
    
                    movie.Id = Convert.ToInt32(rdr["MovieId"]);    
                    movie.Title = rdr["Title"].ToString();    
                    
    
                    lstmovie.Add(movie);    
                }    
                con.Close();    
            }    
            return lstmovie;    
        }    
    
        //To Add new movie title      
        public void AddMovie(Movie movie)    
        {    
            using (SqlConnection con = new SqlConnection(connectionString))    
            {    
                SqlCommand cmd = new SqlCommand("spAddMovie", con);    
                cmd.CommandType = CommandType.StoredProcedure;    
    
                cmd.Parameters.AddWithValue("@Title", movie.Title);    
    
                con.Open();    
                cmd.ExecuteNonQuery();    
                con.Close();    
            }    
        }    

    }    
}