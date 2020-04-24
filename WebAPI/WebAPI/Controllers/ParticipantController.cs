using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    public class ParticipantController : ApiController
    {
    [HttpPost]
    [Route("api/InsertParticipant")]
    public Participant Insert(Participant model)
    {
      using (DBModel2 db = new DBModel2())
      {
        db.Participants.Add(model);
        db.SaveChanges();
        return model;
      }
    }

  }
}
