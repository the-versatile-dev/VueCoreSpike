using System.Collections.Generic;
using VueCoreMVCSpikeSix.Models;

namespace VueCoreMVCSpikeSix.Services
{
    public interface IPostService
    {
        List<BlogPost> GetPosts();

        BlogPost GetById(int id);
        BlogPost GetBySlug(string slug);

        bool DoesSlugExist(string slug);

        void Create(BlogPost post);
    }
}