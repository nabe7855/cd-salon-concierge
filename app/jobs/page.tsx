"use client";

import Layout from "@/components/Layout";
import { createClient } from "@/utils/supabase/client";
import Link from "next/link";
import React, { useState } from "react";

const RecruitmentPage: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
    prefecture: "",
    gender: "female",
    employment_type: "正社員",
    desired_days: "5",
    desired_hours: "9：30～19：00",
    comment: "",
  });

  const supabase = createClient();

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { error } = await supabase.from("job_applications").insert([
      {
        ...formData,
        status: "pending",
      },
    ]);

    if (error) {
      alert("送信に失敗しました。時間をおいて再度お試しください。");
      console.error(error);
    } else {
      setIsSuccess(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setIsSubmitting(false);
  };

  return (
    <Layout>
      <div className="bg-[#fcf8f4] min-h-screen pb-20 font-sans">
        {/* Breadcrumb - Top */}
        <div className="container mx-auto px-4 pt-4 pb-2 text-[10px] text-gray-400">
          <Link href="/" className="hover:text-salon-blue">
            トップ
          </Link>{" "}
          &gt; <span className="text-gray-500 font-bold">求人情報</span>
        </div>

        {/* Ornate Title Header */}
        <div className="flex justify-center mb-8 pt-6">
          <div className="relative">
            <div className="bg-[#4db6ac] text-white px-20 py-2 text-2xl font-bold flex items-center justify-center border-[3px] border-white outline outline-1 outline-[#4db6ac] rounded-sm">
              求人情報
            </div>
            {/* Ornate corners */}
            <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-[#4db6ac] bg-[#fcf8f4]"></div>
            <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-[#4db6ac] bg-[#fcf8f4]"></div>
            <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-[#4db6ac] bg-[#fcf8f4]"></div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-[#4db6ac] bg-[#fcf8f4]"></div>
          </div>
        </div>

        {isSuccess ? (
          <div className="container mx-auto px-4 max-w-2xl py-20 text-center">
            <div className="bg-white rounded-[40px] p-12 shadow-sm border border-[#f0e6d2]">
              <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                応募が完了いたしました
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                求人へのご応募ありがとうございました。
                <br />
                内容を確認次第、担当者から面接等のご連絡をさせていただきます。
              </p>
              <Link
                href="/"
                className="inline-block bg-[#4db6ac] text-white px-10 py-3 rounded-full font-bold hover:scale-105 transition-transform"
              >
                トップページへ戻る
              </Link>
            </div>
          </div>
        ) : (
          <>
            {/* Hero Circular Image Section */}
            <section className="flex justify-center mb-16 px-4">
              <div className="relative w-full max-w-2xl">
                <div className="bg-blue-50/50 rounded-full aspect-square md:aspect-auto md:h-80 w-full flex items-center justify-center overflow-hidden border border-blue-100/50 shadow-inner">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
                    alt="Operator Hero"
                    className="w-3/4 md:w-1/2 object-cover rounded-full border-8 border-white shadow-xl"
                  />
                </div>
              </div>
            </section>

            {/* Intro Sections */}
            <section className="container mx-auto px-4 max-w-4xl space-y-16 mb-20">
              {/* Intro 1 */}
              <div className="flex flex-col md:flex-row items-center gap-8 bg-white p-8 rounded-3xl shadow-sm">
                <div className="md:w-1/2">
                  <img
                    src="https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&q=80&w=400"
                    alt="Work Life"
                    className="rounded-xl w-full"
                  />
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    <span className="border-b-2 border-[#f69494] pb-1">
                      自分の時間を大切にできる
                    </span>
                    <br />
                    <span className="text-[#f69494]">なので安心</span>
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    お仕事は在宅勤務のオペレーターとなり、アルバイト・業務委託は週3日から、正社員・契約社員は週休2日制で、自分に合う勤務シフトから選ぶことが可能です。そしてメンズエステサロン専門の電話受付や事務作業が主な仕事になり、体力的にも長く続けられます。これらの業務経験を重ねていくと、言葉遣いや接し方などの電話応対スキルやマナーに加えて、事務作業やパソコンスキルなど総合的なスキルを身につけることができます。
                  </p>
                </div>
              </div>

              {/* Intro 2 */}
              <div className="flex flex-col md:flex-row-reverse items-center gap-8 bg-white p-8 rounded-3xl shadow-sm">
                <div className="md:w-1/2">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400"
                    alt="Team Support"
                    className="rounded-xl w-full"
                  />
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    <span className="border-b-2 border-[#f69494] pb-1">
                      スタッフ同士フォローし合える職場環境
                    </span>
                    <br />
                    <span className="text-[#f69494]">なので安心</span>
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    未経験の方でも業務を確実に覚えてスキルアップしていけるように、マンツーマンでメンズエステサロンの基礎知識から電話受付、事務作業の研修を行っています。また、個人を全員でサポート・フォローする体制があります。電話代行業務にあたっては、やる気と要領の良い作業が求められますが、継続することで達成感や、やりがいを感じられると思います。
                  </p>
                </div>
              </div>

              {/* Intro 3 */}
              <div className="flex flex-col md:flex-row items-center gap-8 bg-white p-8 rounded-3xl shadow-sm">
                <div className="md:w-1/2">
                  <img
                    src="https://images.unsplash.com/photo-1507206130118-b5907f817163?auto=format&fit=crop&q=80&w=400"
                    alt="No Experience"
                    className="rounded-xl w-full"
                  />
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    スキルや経験がなくても大丈夫
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    事務処理スキルや電話受付業務の経験はあった方が良いですがそれよりも人柄を重視して採用しています。今のスタッフも未経験から始めたスタッフも少なくありません。私たちと一緒にコールセンターの一員になってみませんか。私にも出来るかな？と少しご不安に思われる方でも、安心してお問い合わせください。
                  </p>
                </div>
              </div>
            </section>

            {/* Recruitment Details (募集要項) */}
            <section className="container mx-auto px-4 max-w-4xl mb-20">
              <div className="flex justify-center mb-6">
                <div className="bg-[#f69494] text-white px-12 py-2 rounded-full text-lg font-bold shadow-md">
                  募集要項
                </div>
              </div>
              <div className="bg-[#fef9e7] border border-[#f0e6d2] rounded-xl overflow-hidden shadow-sm">
                <table className="w-full text-xs md:text-sm border-collapse">
                  <tbody>
                    {[
                      {
                        label: "業種・内容",
                        content:
                          "【在宅勤務オペレーター】\n・電話での予約受付業務\n・データ処理\n・WEBサイトの更新作業\n\n【サロン運営スタッフ】\n別途募集中です。お問合せください。",
                      },
                      {
                        label: "雇用形態",
                        content:
                          "・正社員\n・契約社員\n・アルバイト\n・業務委託",
                      },
                      {
                        label: "給与",
                        content:
                          "【正社員・契約社員】\n月給：日勤23.4万円～ 中勤22.5万円～\n夜勤①25万円～ 夜勤②31.5万円～\n【アルバイト】\n時給：日勤1200円～ 夜勤22時以降1500円～\n【業務委託】\nアルバイトと同等の報酬\n※上記全てに歩合給有",
                      },
                      {
                        label: "待遇・福利厚生",
                        content:
                          "・完全在宅勤務可\n・社会保険完備\n・服装・髪型・ネイル自由\n・交通費規定支給\n・歩合給有\n・賞与有\n・昇給有(10月に評価制度あり)\n・長期休暇出勤手当\n・機材貸与",
                      },
                      {
                        label: "応募資格",
                        content:
                          "・ご自宅に光固定ネット回線必須\n・研修のために7日間程度来社できる方\n・基本的なPC操作ができる方\n・社会人としての常識がある方\n・18歳～50歳程度まで\n・未経験者歓迎・経験者優優",
                      },
                      {
                        label: "求める人材",
                        content:
                          "・資格・経験を活かしたい方\n・自己管理のできる方\n・意欲的にお仕事ができる方\n・一生懸命に業務に向き合ってくださる方",
                      },
                      {
                        label: "勤務時間",
                        content:
                          "【正社員・契約社員】\n日勤／9：30～19：00\n中勤／14：00～23：00\n夜勤①／19：00～4：00\n夜勤②／19：00～6：00\n・日勤、中勤、夜勤①、夜勤②から選択\n・勤務時間中に休憩1時間\n・週5日勤務 (週休2日)\n・基本的に残業なし\n\n【アルバイト・業務委託】\n日勤／9：30～19：00\n中勤／14：00～23：00\n夜勤①／19：00～4：00\n夜勤②／19：00～6：00\n夜勤③／19：00～2：00\n・日勤、中勤、夜勤①、夜勤②、夜勤③から選択\n・勤務時間中に休憩1時間 (夜勤③は休憩45分)\n・週3日以上勤務\n・基本的に残業なし",
                      },
                      {
                        label: "休日休暇",
                        content:
                          "【正社員・契約社員】週休2日制\n【アルバイト・業務委託】週3日以上勤務\n※1週間ごとの社内シフトに準ずる",
                      },
                      { label: "勤務期間", content: "最低勤務期間：半年以上" },
                      { label: "会社名", content: "合同会社オスカン" },
                      { label: "所在地", content: "東京都新宿区新宿2-15-29" },
                      {
                        label: "アクセス",
                        content:
                          "丸の内線「新宿御苑前駅」より徒歩3分\n丸の内線・副都心線「新宿三丁目駅」より徒歩4分",
                      },
                      {
                        label: "連絡先",
                        content:
                          "050-5443-1770\n※お問い合わせの際には「採用ページを見て」とお伝えいただくとスムーズです",
                      },
                    ].map((row, idx) => (
                      <tr
                        key={idx}
                        className="border-b border-[#f0e6d2] last:border-0"
                      >
                        <td className="w-1/4 p-4 font-bold text-gray-700 bg-[#fbf5e1]/50 border-r border-[#f0e6d2] text-center">
                          {row.label}
                        </td>
                        <td className="p-4 text-gray-600 whitespace-pre-line leading-relaxed">
                          {row.content}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Application Form (応募フォーム) */}
            <section className="container mx-auto px-4 max-w-4xl mb-20">
              <div className="flex justify-center mb-6">
                <div className="bg-[#f69494] text-white px-12 py-2 rounded-full text-lg font-bold shadow-md">
                  応募フォーム
                </div>
              </div>
              <div className="bg-[#fefce8] rounded-[40px] p-8 md:p-16 shadow-sm border border-[#f0e6d2]">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  {/* Field: Name */}
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="w-full md:w-1/3 flex items-center justify-between">
                      <label className="text-sm font-bold text-gray-700">
                        お名前
                      </label>
                      <span className="bg-[#f69494] text-white text-[10px] px-2 py-0.5 rounded">
                        必須
                      </span>
                    </div>
                    <div className="w-full md:w-2/3">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-white border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-salon-pink"
                      />
                    </div>
                  </div>

                  {/* Field: Age */}
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="w-full md:w-1/3 flex items-center justify-between">
                      <label className="text-sm font-bold text-gray-700">
                        年齢
                      </label>
                      <span className="bg-[#f69494] text-white text-[10px] px-2 py-0.5 rounded">
                        必須
                      </span>
                    </div>
                    <div className="w-full md:w-2/3">
                      <input
                        type="text"
                        name="age"
                        value={formData.age}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-white border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-salon-pink"
                      />
                    </div>
                  </div>

                  {/* Field: Email */}
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="w-full md:w-1/3 flex items-center justify-between">
                      <label className="text-sm font-bold text-gray-700">
                        メールアドレス
                      </label>
                      <span className="bg-[#f69494] text-white text-[10px] px-2 py-0.5 rounded">
                        必須
                      </span>
                    </div>
                    <div className="w-full md:w-2/3">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-white border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-salon-pink"
                      />
                    </div>
                  </div>

                  {/* Field: Phone */}
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="w-full md:w-1/3 flex items-center justify-between">
                      <label className="text-sm font-bold text-gray-700">
                        お電話番号
                      </label>
                      <span className="bg-[#f69494] text-white text-[10px] px-2 py-0.5 rounded">
                        必須
                      </span>
                    </div>
                    <div className="w-full md:w-2/3">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-white border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-salon-pink"
                      />
                    </div>
                  </div>

                  {/* Field: Prefecture */}
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="w-full md:w-1/3 flex items-center justify-between">
                      <label className="text-sm font-bold text-gray-700">
                        お住まいの都道府県
                      </label>
                      <span className="bg-[#f69494] text-white text-[10px] px-2 py-0.5 rounded">
                        必須
                      </span>
                    </div>
                    <div className="w-full md:w-2/3">
                      <select
                        name="prefecture"
                        value={formData.prefecture}
                        onChange={handleInputChange}
                        required
                        className="bg-white border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-salon-pink"
                      >
                        <option value="">選択してください</option>
                        <option>東京都</option>
                        <option>神奈川県</option>
                        <option>千葉県</option>
                        <option>埼玉県</option>
                        <option>大阪府</option>
                        <option>愛知県</option>
                        <option>福岡県</option>
                        <option>その他</option>
                      </select>
                    </div>
                  </div>

                  {/* Field: Gender */}
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="w-full md:w-1/3 flex items-center justify-between">
                      <label className="text-sm font-bold text-gray-700">
                        性別
                      </label>
                      <span className="bg-[#f69494] text-white text-[10px] px-2 py-0.5 rounded">
                        必須
                      </span>
                    </div>
                    <div className="w-full md:w-2/3 flex gap-6 text-sm text-gray-600">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="gender"
                          value="male"
                          checked={formData.gender === "male"}
                          onChange={handleInputChange}
                          className="w-4 h-4 accent-salon-pink"
                        />
                        男性
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="gender"
                          value="female"
                          checked={formData.gender === "female"}
                          onChange={handleInputChange}
                          className="w-4 h-4 accent-salon-pink"
                        />
                        女性
                      </label>
                    </div>
                  </div>

                  {/* Field: Employment Type */}
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="w-full md:w-1/3 flex items-center justify-between">
                      <label className="text-sm font-bold text-gray-700">
                        雇用形態
                      </label>
                      <span className="bg-[#f69494] text-white text-[10px] px-2 py-0.5 rounded">
                        必須
                      </span>
                    </div>
                    <div className="w-full md:w-2/3 grid grid-cols-2 gap-3 text-sm text-gray-600">
                      {["正社員", "契約社員", "アルバイト", "業務委託"].map(
                        (item) => (
                          <label
                            key={item}
                            className="flex items-center gap-2 cursor-pointer"
                          >
                            <input
                              type="radio"
                              name="employment_type"
                              value={item}
                              checked={formData.employment_type === item}
                              onChange={handleInputChange}
                              className="w-4 h-4 accent-salon-pink"
                            />
                            {item}
                          </label>
                        )
                      )}
                    </div>
                  </div>

                  {/* Field: Desired Days */}
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="w-full md:w-1/3 flex items-center justify-between">
                      <label className="text-sm font-bold text-gray-700">
                        希望勤務日数
                      </label>
                      <span className="bg-[#f69494] text-white text-[10px] px-2 py-0.5 rounded">
                        必須
                      </span>
                    </div>
                    <div className="w-full md:w-2/3 flex items-center gap-2 text-sm text-gray-600">
                      週
                      <select
                        name="desired_days"
                        value={formData.desired_days}
                        onChange={handleInputChange}
                        className="bg-white border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-salon-pink"
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                      </select>
                      日
                    </div>
                  </div>

                  {/* Field: Desired Hours */}
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="w-full md:w-1/3 flex items-center justify-between">
                      <label className="text-sm font-bold text-gray-700">
                        希望勤務時間
                      </label>
                      <span className="bg-[#f69494] text-white text-[10px] px-2 py-0.5 rounded">
                        必須
                      </span>
                    </div>
                    <div className="w-full md:w-2/3 space-y-2 text-sm text-gray-600">
                      {[
                        "9：30～19：00",
                        "14：00～23：00",
                        "19：00～2：00",
                        "19：00～4：00",
                        "19：00～6：00",
                      ].map((item) => (
                        <label
                          key={item}
                          className="flex items-center gap-2 cursor-pointer"
                        >
                          <input
                            type="radio"
                            name="desired_hours"
                            value={item}
                            checked={formData.desired_hours === item}
                            onChange={handleInputChange}
                            className="w-4 h-4 accent-salon-pink"
                          />
                          {item}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Field: Comment */}
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="w-full md:w-1/3 flex items-center justify-between">
                      <label className="text-sm font-bold text-gray-700">
                        コメント欄
                      </label>
                      <span className="bg-[#f8d7da] text-[#f69494] text-[10px] px-2 py-0.5 rounded border border-[#f69494]/30">
                        任意
                      </span>
                    </div>
                    <div className="w-full md:w-2/3">
                      <textarea
                        name="comment"
                        value={formData.comment}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full bg-white border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-salon-pink"
                      ></textarea>
                    </div>
                  </div>

                  {/* Privacy Section */}
                  <div className="pt-8 text-center text-[10px] text-gray-500 space-y-2">
                    <p className="font-bold">個人情報の取り扱いについて</p>
                    <p>
                      お客様よりご登録いただいた個人情報は、弊社から事務的な連絡事項を通知するためにのみ使用します。
                    </p>
                    <p>
                      ※
                      個人情報の取り扱いに同意される方のみ、上記の内容で応募してください。
                    </p>
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-center pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`bg-[#f69494] text-white px-16 py-4 rounded-full font-bold text-xl shadow-lg transition-all transform hover:scale-105 ${
                        isSubmitting
                          ? "opacity-50 cursor-not-allowed"
                          : "hover:bg-[#f47c7c]"
                      }`}
                    >
                      {isSubmitting ? "送信中..." : "上記の内容で応募する >>"}
                    </button>
                  </div>
                </form>
              </div>
            </section>
          </>
        )}

        {/* Bottom Breadcrumb */}
        <div className="container mx-auto px-4 max-w-4xl mt-12 pb-12 border-t border-gray-100">
          <nav className="py-4 text-[10px] text-gray-400">
            <Link href="/" className="hover:text-salon-pink">
              トップ
            </Link>{" "}
            &gt; <span className="text-gray-600">求人情報</span>
          </nav>
        </div>
      </div>
    </Layout>
  );
};

export default RecruitmentPage;
