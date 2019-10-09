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
using PhoneBookWebApi.Models;

namespace PhoneBookWebApi.Controllers
{
    public class PhoneBookEntriesController : ApiController
    {
        private DBModel db = new DBModel();

        // GET: api/PhoneBookEntries
        public IQueryable<PhoneBookEntry> GetPhoneBookEntries()
        {
            return db.PhoneBookEntries;
        }

        // GET: api/PhoneBookEntries/5
        [ResponseType(typeof(PhoneBookEntry))]
        public IHttpActionResult GetPhoneBookEntry(int id)
        {
            PhoneBookEntry phoneBookEntry = db.PhoneBookEntries.Find(id);
            if (phoneBookEntry == null)
            {
                return NotFound();
            }

            return Ok(phoneBookEntry);
        }

        // PUT: api/PhoneBookEntries/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutPhoneBookEntry(int id, PhoneBookEntry phoneBookEntry)
        {
            if (id != phoneBookEntry.Id)
            {
                return BadRequest();
            }

            db.Entry(phoneBookEntry).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PhoneBookEntryExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/PhoneBookEntries
        [ResponseType(typeof(PhoneBookEntry))]
        public IHttpActionResult PostPhoneBookEntry(PhoneBookEntry phoneBookEntry)
        {
            db.PhoneBookEntries.Add(phoneBookEntry);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (PhoneBookEntryExists(phoneBookEntry.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = phoneBookEntry.Id }, phoneBookEntry);
        }

        // DELETE: api/PhoneBookEntries/5
        [ResponseType(typeof(PhoneBookEntry))]
        public IHttpActionResult DeletePhoneBookEntry(int id)
        {
            PhoneBookEntry phoneBookEntry = db.PhoneBookEntries.Find(id);
            if (phoneBookEntry == null)
            {
                return NotFound();
            }

            db.PhoneBookEntries.Remove(phoneBookEntry);
            db.SaveChanges();

            return Ok(phoneBookEntry);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PhoneBookEntryExists(int id)
        {
            return db.PhoneBookEntries.Count(e => e.Id == id) > 0;
        }
    }
}