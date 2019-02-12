using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Threading.Tasks;

namespace Management.Models
{
    /// <summary>
    /// 分页查询信息
    /// </summary>
    [DataContract]
    [Serializable]
    public class PageInfos
    {
        public PageInfos()
        {
            Size = 10;
            Index = 1;
            CountTotal = true;
        }
        /// <summary>
        /// 分页大小
        /// </summary>
        [DataMember]
        public int Size { get; set; }
        /// <summary>
        /// 分页索引
        /// </summary>
        [DataMember]
        public int Index { get; set; }

        /// <summary>
        /// 是否统计总记录数
        /// </summary>
        [DataMember]
        public bool CountTotal { get; set; }
        /// <summary>
        /// 记录总数
        /// </summary>
        [DataMember]
        public long TotalRow { get; set; }
    }
}
