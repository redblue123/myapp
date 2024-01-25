import { defineMock } from 'umi';

type SampleDate = {
  key: string;
  数据表名: string;
  数据库名:string;
  表中文名:string;
};

let sampleDate: SampleDate[] = [
  { key: '1', 数据表名: 'obs_bond_mkt_quot_info_d_v',数据库名:'ods', 表中文名:'资产账户分类定义设置'},
  { key: '2', 数据表名: 'ac_dipper_report_asset_allocati_test', 数据库名:'modeltest', 表中文名:'ABS债券市场行情信息表'},
  { key: '3', 数据表名: 'liaoxiaofang', 数据库名:'modeltest', 表中文名:'ABS债券市场行情信息表' },
  { key: '4', 数据表名: 'shishuyu' , 数据库名:'modeltest', 表中文名:'ABS债券市场行情信息表'}, 
  { key: '5', 数据表名: 'liuyingwei', 数据库名:'indic_meta', 表中文名:'ABS债券市场行情信息表' },
];

export default defineMock({
  'GET /api/sampleDate': (_, res) => {
    res.send({
      status: 'ok',
      data: sampleDate,
    });
  },
  'DELETE /api/sampleDate/:key': (req, res) => {
    sampleDate = sampleDate.filter((item) => item.key !== req.params.key);
    res.send({ status: 'ok' });
  },
});