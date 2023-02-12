# TelAvivMuni



CORS:

Install-package Microsoft.AspNetCore.Cors


Startup.cs

            app.UseCors(builder =>
            {
                builder.AllowAnyOrigin()
                       .AllowAnyMethod()
                       .AllowAnyHeader();
            });
			
Controller			

        // https://localhost:44363/api/values/GetCountries
        [HttpGet]
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        [Route ("GetCountries")]
        public IEnumerable<Country> GetCountries()
        {
            List<Country> countries = new List<Country>();
            countries.Add(new Country { Name = "Israel", Area = 22700, Population = 9100000 });
            countries.Add(new Country { Name = "UK", Area = 244000, Population = 61000000 });
            countries.Add(new Country { Name = "Holland", Area = 40000, Population = 17500000 });

            return countries;
        }


Refs:
https://www.yogihosting.com/aspnet-core-enable-cors/
