using System;
using System.IO;
using System.Text;
using System.Runtime.InteropServices;

namespace VCConsoleApp
{
    class Program
    {
        static void Main(string[] args)
        {
            // Console.WriteLine("Hello World!");
            buildTestData();
            Console.WriteLine("执行完毕!");
        }

        static void buildTestData()
        {
            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.Append("var treeData = [");
            var count = 100000;

            for (var i = 0; i <= count; i++)
            {
                int id = i;
                int pid = getPid(id);
                // var j = $"nihao{count}";//${"nihao"}
                var itemStr = "{ id: " + id + ", title: '名称:" + id + "', pid: " + pid + ", start: '2019-01-01', finish: '2020-01-01', duration: 12, progress: 80, status: '1', status2: '1' },";
                stringBuilder.Append(itemStr);
                // stringBuilder.AppendFormat("")
                // stringBuilder.Append(j);
            }
            stringBuilder.Append("]");

            if (RuntimeInformation.IsOSPlatform(OSPlatform.OSX))
            {


                File.WriteAllText(@"json" + count + ".js", stringBuilder.ToString());
                // Console.Write(stringBuilder.ToString());
            }
            else if (RuntimeInformation.IsOSPlatform(OSPlatform.Windows))
            {
                File.WriteAllText(@"json" + count + ".js", stringBuilder.ToString());
                //File.WriteAllText(@"C:\TreeView2\data" + count + ".js", stringBuilder.ToString());

            }
        }

        private static int getPid(int id)
        {
            Random random = new Random();
            var value = random.Next(0, id);
            return Convert.ToInt32(value);
        }
    }
}
