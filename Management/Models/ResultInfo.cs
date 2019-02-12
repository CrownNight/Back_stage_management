using System;
using System.Runtime.Serialization;

namespace Management.Models
{
    [DataContract]
    [Serializable]
    public class ResultInfo
    {
        public ResultInfo()
        {
            Flag = false;
            ErrorMessage = string.Empty;
        }
        /// <summary>
        /// 是否成功
        /// </summary>
        [DataMember]
        public bool Flag { get; set; }
        /// <summary>
        /// 错误信息
        /// </summary>
        [DataMember]
        public string ErrorMessage { get; set; }

    }

    [DataContract]
    [Serializable]
    public class ResultInfo<T> : ResultInfo
    {
        [DataMember]
        public T ReturnValue { get; set; }
    }

    [DataContract]
    public class ResultInfo<T,T1> : ResultInfo<T>
    {
        [DataMember]
        public T1 ReturnValue1 { get; set; }
    }
}
