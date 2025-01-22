import  { useState } from 'react';
import { BeakerIcon } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from './Card'

const DilutionCalculator = () => {
  const [ratio, setRatio] = useState('10');
  const [waterAmount, setWaterAmount] = useState('1000');

  const calculateSolution = () => {
    const ratioNum = parseFloat(ratio);
    const waterNum = parseFloat(waterAmount);
    return Math.round((waterNum / (ratioNum + 1)) / 10) * 10;
  };

  return (
    <div className="h-[100vh] flex items-center justify-center">
      <div className="w-[375px]">
        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-8 shadow-lg">
          <div className="flex items-center space-x-4">
            <BeakerIcon className="w-12 h-12 text-white"/>
            <div>
              <h1 className="text-3xl font-bold text-white">희석비 계산기</h1>
              <p className="text-blue-100 mt-2">
                정확한 비율로 세차용품을 희석하여 사용해보세요
              </p>
            </div>
          </div>
        </div>
        <Card className="w-full max-w-lg min-w-[360px]">
          <CardHeader>
            <CardTitle className="text-lg font-bold">희석비 계산기</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <label className="w-24">희석비율:</label>
                <input
                  type="number"
                  value={ratio}
                  onChange={(e) => setRatio(e.target.value)}
                  className="border rounded px-2 py-1 w-24"
                  min="1"
                />
                <span>: 1</span>
              </div>

              <div className="flex items-center space-x-2">
                <label className="w-24">물의 양:</label>
                <input
                  type="number"
                  value={waterAmount}
                  onChange={(e) => setWaterAmount(e.target.value)}
                  className="border rounded px-2 py-1 w-24"
                  min="0"
                />
                <span>ml</span>
              </div>

              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <p className="text-lg">
                  필요한 용액의 양: <strong>{calculateSolution()}</strong> ml
                </p>
              </div>

              <div className="mt-4 text-sm text-gray-600">
                <p>* 계산식: 물의 양 ÷ (희석비 + 1)</p>
                <p>* 결과값은 10ml 단위로 반올림됩니다.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DilutionCalculator;
