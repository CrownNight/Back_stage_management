using Management.Database;
using Management.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Management.Manager
{
    public class CommonManager
    {
        public readonly DataContext db;
        public CommonManager(DataContext db)
        {
            this.db = db;
        }


        public List<T> Pageing<T>(IQueryable<T> infoList, PageInfos pageInfo)
        {
            if (pageInfo == null)
            {
                pageInfo = new PageInfos { Index = 1, Size = 10, TotalRow = 0, CountTotal = true };
            }

            if (infoList != null && pageInfo != null)
            {
                if (pageInfo.CountTotal)
                {
                    pageInfo.TotalRow = infoList.Count();
                }

                long infoCount = pageInfo.TotalRow;

                //特殊不需要分页的情况

                if (pageInfo.Size == int.MaxValue || pageInfo.Size == -1)
                    return infoList.ToList();

                int index = pageInfo.Index < 1 ? 1 : pageInfo.Index;
                if (((pageInfo.Index - 1) * pageInfo.Size) > infoCount)
                {
                    index = (int)infoCount / pageInfo.Size;
                }
                else if (((pageInfo.Index - 1) * pageInfo.Size) == infoCount)
                {
                    index = pageInfo.Index - 1;
                }
                index = index < 1 ? 1 : index;
                infoList = infoList.Skip((index - 1) * pageInfo.Size).Take(pageInfo.Size);
                return infoList.ToList();
            }
            else
                return new List<T>();
        }
    }
}
