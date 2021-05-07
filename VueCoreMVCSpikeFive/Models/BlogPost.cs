using System;

namespace VueCoreMVCSpikeFive.Models
{
    public class BlogPost
    {
        public int Id { get; set; }

        public DateTime PostDate { get; set; }

        public string Slug { get; set; }

        public string Title { get; set; }

        public string Content { get; set; }
    }
}