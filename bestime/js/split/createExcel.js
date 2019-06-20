import convertTime from './convertTime'
import _Object from './_Object'
//  xmlns:x="urn:schemas-microsoft-com:office:excel"
export default function createExcel (opt) {
  opt = _Object(opt)
  var excelBlob = new Blob([
    `
      <html>
        <head>
          <!--[if gte mso 9]>
            <xml>
              <x:ExcelWorkbook>
                <x:ExcelWorksheets>
                  <x:ExcelWorksheet>
                    <x:WorksheetOptions>                      
                    </x:WorksheetOptions>
                  </x:ExcelWorksheet>
                </x:ExcelWorksheets>
              </x:ExcelWorkbook>
            </xml>
          <![endif]-->
          <meta charset='utf-8' />
          <style>${opt.css}</style>
        </head>
        <body>${opt.oTable.outerHTML}</body>
      </html>
    `
  ])

  var t = convertTime(+new Date(), true)
  var tStr = t.year + '年' + t.month + '月' + t.day + '日' + t.hours + '时' + t.minutes + '分' + t.seconds + '秒'
  
  var oA = document.createElement('a');
  oA.href = URL.createObjectURL(excelBlob);
  oA.download = opt.name.concat('-').concat(tStr).concat('.xlsx');
  oA.click();
}