using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using System.Web.UI.WebControls;
using capstone_webAPI.Models;

namespace capstone_webAPI.Controllers
{
    public class LoginController : ApiController
    {
        private Dbmodels db = new Dbmodels();

        //POST: api/Login
        [ResponseType(typeof(Employeemaster))]

        public IHttpActionResult PostEmployeemaster(LoginModels emp)
        {
            Employeemaster employeemaster = db.Employeemasters.Where(m => m.EmailId == emp.Username && m.Password == emp.Password).FirstOrDefault();
            return Ok(employeemaster);
        }
        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
