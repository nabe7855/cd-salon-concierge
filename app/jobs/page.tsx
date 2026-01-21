"use client";

import Layout from "@/components/Layout";
import { createClient } from "@/utils/supabase/client";
import { CheckCircle2, Clock, ShieldCheck, Users } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const RecruitmentPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"time" | "team" | "beginner">(
    "time",
  );
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
    >,
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
      <div className="bg-salon-light/30 min-h-screen font-sans text-gray-700">
        {/* --- Hero Section: Green Theme --- */}
        <section className="relative overflow-hidden bg-botanical-primary pt-20 pb-16 md:pt-32 md:pb-24">
          <div className="absolute inset-0 bg-black/10 z-0"></div>
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="container mx-auto px-4 relative z-10 text-center text-white">
            <h1 className="text-2xl md:text-5xl font-bold font-heading mb-4 md:mb-6 tracking-wide">
              採用情報
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto leading-relaxed font-light">
              あなたのライフスタイルに合わせた働き方を。
              <br />
              未経験からでも安心のサポート体制で、一緒に成長しませんか？
            </p>
          </div>
        </section>

        {isSuccess ? (
          <div className="container mx-auto px-4 max-w-2xl py-20 text-center animate-fade-in">
            <div className="bg-white rounded-[32px] p-12 shadow-sm border border-gray-100">
              <div className="w-20 h-20 bg-green-50 text-botanical-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={40} />
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
                className="inline-block bg-botanical-primary text-white px-10 py-3 rounded-full font-bold hover:bg-opacity-90 transition-all"
              >
                トップページへ戻る
              </Link>
            </div>
          </div>
        ) : (
          <>
            {/* --- 1. Merits: Tabbed UI --- */}
            <section className="py-20">
              <div className="container mx-auto px-4 max-w-5xl">
                <div className="text-center mb-12">
                  <h2 className="text-2xl text-botanical-primary font-bold font-heading mb-2">
                    私たちの働きやすさ
                  </h2>
                  <p className="text-gray-400 text-xs tracking-widest">
                    MERITS
                  </p>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                  <button
                    onClick={() => setActiveTab("time")}
                    className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all shadow-sm border ${
                      activeTab === "time"
                        ? "bg-salon-gold text-white border-salon-gold scale-105"
                        : "bg-white text-gray-500 border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    <Clock size={16} />
                    自分の時間
                  </button>
                  <button
                    onClick={() => setActiveTab("team")}
                    className={`flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base font-bold transition-all shadow-sm border ${
                      activeTab === "team"
                        ? "bg-botanical-primary text-white border-botanical-primary scale-105"
                        : "bg-white text-gray-500 border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    <Users size={16} />
                    支え合える
                  </button>
                  <button
                    onClick={() => setActiveTab("beginner")}
                    className={`flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base font-bold transition-all shadow-sm border ${
                      activeTab === "beginner"
                        ? "bg-gray-800 text-white border-gray-800 scale-105"
                        : "bg-white text-gray-500 border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    <ShieldCheck size={16} />
                    未経験歓迎
                  </button>
                </div>

                {/* Tab Content Area */}
                <div className="bg-white rounded-[32px] p-6 md:p-12 shadow-sm border border-gray-100 min-h-[300px] md:min-h-[400px] flex items-center">
                  {activeTab === "time" && (
                    <div className="flex flex-col md:flex-row gap-8 items-center animate-fade-in">
                      <div className="md:w-1/2">
                        <img
                          src="/1.png"
                          alt="Own Time"
                          className="rounded-2xl shadow-lg w-full h-64 object-cover"
                        />
                      </div>
                      <div className="md:w-1/2 space-y-4">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                          自分の時間を大切にできる
                          <br />
                          <span className="text-salon-gold">なので安心</span>
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-sm">
                          お仕事は在宅勤務のオペレーターとなり、アルバイト・業務委託は週3日から、正社員・契約社員は週休2日制で、自分に合う勤務シフトから選ぶことが可能です。メンズエステサロン専門の電話受付や事務作業が主な仕事になり、体力的にも長く続けられます。言葉遣いや接し方などの電話応対スキルやマナーに加え、事務作業やパソコンスキルなど総合的なスキルを身につけることができます。
                        </p>
                      </div>
                    </div>
                  )}

                  {activeTab === "team" && (
                    <div className="flex flex-col md:flex-row gap-8 items-center animate-fade-in">
                      <div className="md:w-1/2">
                        <img
                          src="/2.png"
                          alt="Team Support"
                          className="rounded-2xl shadow-lg w-full h-64 object-cover"
                        />
                      </div>
                      <div className="md:w-1/2 space-y-4">
                        <h3 className="text-2xl font-bold text-gray-800">
                          スタッフ同士フォローし合える
                          <br />
                          <span className="text-botanical-primary">
                            職場環境なので安心
                          </span>
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-sm">
                          未経験の方でも業務を確実に覚えてスキルアップしていけるように、マンツーマンでメンズエステサロンの基礎知識から電話受付、事務作業の研修を行っています。また、個人を全員でサポート・フォローする体制があります。電話代行業務にあたっては、やる気と要領の良い作業が求められますが、継続することで達成感や、やりがいを感じられると思います。
                        </p>
                      </div>
                    </div>
                  )}

                  {activeTab === "beginner" && (
                    <div className="flex flex-col md:flex-row gap-8 items-center animate-fade-in">
                      <div className="md:w-1/2">
                        <img
                          src="/3.png"
                          alt="No Experience"
                          className="rounded-2xl shadow-lg w-full h-64 object-cover"
                        />
                      </div>
                      <div className="md:w-1/2 space-y-4">
                        <h3 className="text-2xl font-bold text-gray-800">
                          スキルや経験がなくても
                          <br />
                          <span className="text-gray-500">大丈夫</span>
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-sm">
                          事務処理スキルや電話受付業務の経験はあった方が良いですがそれよりも人柄を重視して採用しています。今のスタッフも未経験から始めたスタッフも少なくありません。私たちと一緒にコールセンターの一員になってみませんか。私にも出来るかな？と少しご不安に思われる方でも、安心してお問い合わせください。
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </section>

            {/* --- 2. Job Requirements: List Style --- */}
            <section className="py-20 bg-white">
              <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-16">
                  <h2 className="text-2xl text-botanical-primary font-bold font-heading mb-2">
                    募集要項
                  </h2>
                  <p className="text-gray-400 text-xs tracking-widest">
                    REQUIREMENTS
                  </p>
                </div>

                <div className="space-y-16">
                  {/* Category 01: 募集要項 */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 border-l-4 border-botanical-primary pl-4 mb-8 flex items-center gap-3 bg-salon-light/30 py-2 rounded-r-lg">
                      <span className="text-salon-gold font-heading text-2xl">
                        01
                      </span>
                      募集要項
                    </h3>
                    <div className="space-y-0">
                      <RequirementRow
                        label="業種・内容"
                        content={`【在宅勤務オペレーター】\n・電話での予約受付業務\n・データ処理\n・WEBサイトの更新作業\n\n【サロン運営スタッフ】\n別途募集中です。お問合せください。`}
                      />
                      <RequirementRow
                        label="雇用形態"
                        content={`・正社員\n・契約社員\n・アルバイト\n・業務委託`}
                      />
                      <RequirementRow
                        label="給与"
                        content={`【正社員・契約社員】\n月給：日勤23.4万円～ 中勤22.5万円～\n夜勤①25万円～ 夜勤②31.5万円～\n【アルバイト】\n時給：日勤1200円～ 夜勤22時以降1500円～\n【業務委託】\nアルバイトと同等の報酬\n※上記全てに歩合給有`}
                      />
                      <RequirementRow
                        label="勤務時間"
                        content={`【正社員・契約社員】\n日勤／9：30～19：00\n中勤／14：00～23：00\n夜勤①／19：00～4：00\n夜勤②／19：00～6：00\n・日勤、中勤、夜勤①、夜勤②から選択\n・勤務時間中に休憩1時間\n・週5日勤務 (週休2日)\n・基本的に残業なし\n\n【アルバイト・業務委託】\n日勤／9：30～19：00\n中勤／14：00～23：00\n夜勤①／19：00～4：00\n夜勤②／19：00～6：00\n夜勤③／19：00～2：00\n・日勤、中勤、夜勤①、夜勤②、夜勤③から選択\n・勤務時間中に休憩1時間 (夜勤③は休憩45分)\n・週3日以上勤務\n・基本的に残業なし`}
                      />
                      <RequirementRow
                        label="休日休暇"
                        content={`【正社員・契約社員】週休2日制\n【アルバイト・業務委託】週3日以上勤務\n※1週間ごとの社内シフトに準ずる`}
                      />
                      <RequirementRow
                        label="勤務期間"
                        content={`最低勤務期間：半年以上`}
                        isLast
                      />
                    </div>
                  </div>

                  {/* Category 02: 応募資格 */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 border-l-4 border-botanical-primary pl-4 mb-8 flex items-center gap-3 bg-salon-light/30 py-2 rounded-r-lg">
                      <span className="text-salon-gold font-heading text-2xl">
                        02
                      </span>
                      応募資格
                    </h3>
                    <div className="space-y-0">
                      <RequirementRow
                        label="応募資格"
                        content={`・ご自宅に光固定ネット回線必須\n・研修のために7日間程度来社できる方\n・基本的なPC操作ができる方\n・社会人としての常識がある方\n・18歳～50歳程度まで\n・未経験者歓迎・経験者優優`}
                      />
                      <RequirementRow
                        label="求める人材"
                        content={`・資格・経験を活かしたい方\n・自己管理のできる方\n・意欲的にお仕事ができる方\n・一生懸命に業務に向き合ってくださる方`}
                        isLast
                      />
                    </div>
                  </div>

                  {/* Category 03: 待遇・福利厚生 */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 border-l-4 border-botanical-primary pl-4 mb-8 flex items-center gap-3 bg-salon-light/30 py-2 rounded-r-lg">
                      <span className="text-salon-gold font-heading text-2xl">
                        03
                      </span>
                      待遇・福利厚生
                    </h3>
                    <div className="space-y-0">
                      <RequirementRow
                        label="待遇・福利厚生"
                        content={`・完全在宅勤務可\n・社会保険完備\n・服装・髪型・ネイル自由\n・交通費規定支給\n・歩合給有\n・賞与有\n・昇給有(10月に評価制度あり)\n・長期休暇出勤手当\n・機材貸与`}
                        isLast
                      />
                    </div>
                  </div>

                  {/* Category 04: 会社情報 */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 border-l-4 border-botanical-primary pl-4 mb-8 flex items-center gap-3 bg-salon-light/30 py-2 rounded-r-lg">
                      <span className="text-salon-gold font-heading text-2xl">
                        04
                      </span>
                      会社情報
                    </h3>
                    <div className="space-y-0">
                      <RequirementRow
                        label="会社名"
                        content={`合同会社オスカン`}
                      />
                      <RequirementRow
                        label="所在地"
                        content={`東京都新宿区新宿2-15-29`}
                      />
                      <RequirementRow
                        label="アクセス"
                        content={`丸の内線「新宿御苑前駅」より徒歩3分\n丸の内線・副都心線「新宿三丁目駅」より徒歩4分`}
                      />
                      <RequirementRow
                        label="連絡先"
                        content={`080-1017-5318\n※お問い合わせの際には「採用ページを見て」とお伝えいただくとスムーズです`}
                        isLast
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* --- 3. Flow: Steps --- */}
            <section className="py-20 bg-salon-light/30">
              <div className="container mx-auto px-4 max-w-5xl">
                <div className="text-center mb-16">
                  <h2 className="text-2xl text-botanical-primary font-bold font-heading mb-2">
                    選考フロー
                  </h2>
                  <p className="text-gray-400 text-xs tracking-widest">FLOW</p>
                </div>

                <div className="flex flex-col md:flex-row justify-between relative gap-8 md:gap-4">
                  {/* Connecting Line (Desktop) */}
                  <div className="hidden md:block absolute top-[24px] left-0 w-full h-[2px] bg-gray-200 -z-10"></div>

                  <StepItem
                    number="01"
                    title="応募"
                    desc="下記フォームよりエントリー"
                  />
                  <StepItem
                    number="02"
                    title="書類選考"
                    desc="担当者よりご連絡"
                  />
                  <StepItem
                    number="03"
                    title="面接"
                    desc="オンライン面談実施"
                  />
                  <StepItem
                    number="04"
                    title="採用"
                    desc="研修開始・お仕事スタート"
                  />
                </div>
              </div>
            </section>

            {/* --- 4. Application Form --- */}
            <section className="py-20 bg-white" id="form">
              <div className="container mx-auto px-4 max-w-3xl">
                <div className="text-center mb-12">
                  <h2 className="text-2xl text-botanical-primary font-bold font-heading mb-2">
                    応募フォーム
                  </h2>
                  <p className="text-gray-400 text-xs tracking-widest">ENTRY</p>
                </div>

                <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-lg border border-gray-100">
                  <form className="space-y-8" onSubmit={handleSubmit}>
                    {/* Name */}
                    <FormField label="お名前" required>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="form-input-v2"
                        placeholder="山田 太郎"
                      />
                    </FormField>

                    {/* Age */}
                    <FormField label="年齢" required>
                      <input
                        type="text"
                        name="age"
                        value={formData.age}
                        onChange={handleInputChange}
                        required
                        className="form-input-v2"
                        placeholder="25"
                      />
                    </FormField>

                    {/* Email */}
                    <FormField label="メールアドレス" required>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="form-input-v2"
                        placeholder="example@email.com"
                      />
                    </FormField>

                    {/* Phone */}
                    <FormField label="電話番号" required>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="form-input-v2"
                        placeholder="090-0000-0000"
                      />
                    </FormField>

                    {/* Prefecture */}
                    <FormField label="お住まいの都道府県" required>
                      <select
                        name="prefecture"
                        value={formData.prefecture}
                        onChange={handleInputChange}
                        required
                        className="form-input-v2"
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
                    </FormField>

                    {/* Gender */}
                    <FormField label="性別" required>
                      <div className="flex gap-6 pt-2">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="gender"
                            value="male"
                            checked={formData.gender === "male"}
                            onChange={handleInputChange}
                            className="accent-botanical-primary w-5 h-5"
                          />
                          <span className="text-gray-600">男性</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="gender"
                            value="female"
                            checked={formData.gender === "female"}
                            onChange={handleInputChange}
                            className="accent-botanical-primary w-5 h-5"
                          />
                          <span className="text-gray-600">女性</span>
                        </label>
                      </div>
                    </FormField>

                    {/* Employment Type */}
                    <FormField label="雇用形態" required>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                        {["正社員", "契約社員", "アルバイト", "業務委託"].map(
                          (type) => (
                            <label
                              key={type}
                              className="flex items-center gap-2 cursor-pointer"
                            >
                              <input
                                type="radio"
                                name="employment_type"
                                value={type}
                                checked={formData.employment_type === type}
                                onChange={handleInputChange}
                                className="accent-botanical-primary w-5 h-5"
                              />
                              <span className="text-gray-600">{type}</span>
                            </label>
                          ),
                        )}
                      </div>
                    </FormField>

                    {/* Desired Days */}
                    <FormField label="希望勤務日数" required>
                      <div className="flex items-center gap-3">
                        <span className="text-gray-600">週</span>
                        <select
                          name="desired_days"
                          value={formData.desired_days}
                          onChange={handleInputChange}
                          className="form-input-v2 w-24 text-center"
                        >
                          {[1, 2, 3, 4, 5, 6].map((d) => (
                            <option key={d} value={d}>
                              {d}
                            </option>
                          ))}
                        </select>
                        <span className="text-gray-600">日</span>
                      </div>
                    </FormField>

                    {/* Desired Hours */}
                    <FormField label="希望勤務時間" required>
                      <div className="space-y-3 pt-2">
                        {[
                          "9：30～19：00",
                          "14：00～23：00",
                          "19：00～2：00",
                          "19：00～4：00",
                          "19：00～6：00",
                        ].map((time) => (
                          <label
                            key={time}
                            className="flex items-center gap-2 cursor-pointer"
                          >
                            <input
                              type="radio"
                              name="desired_hours"
                              value={time}
                              checked={formData.desired_hours === time}
                              onChange={handleInputChange}
                              className="accent-botanical-primary w-5 h-5"
                            />
                            <span className="text-gray-600 font-mono">
                              {time}
                            </span>
                          </label>
                        ))}
                      </div>
                    </FormField>

                    {/* Comment */}
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <label className="text-sm font-bold text-gray-700">
                          コメント欄
                        </label>
                        <span className="bg-gray-100 text-gray-500 text-[10px] px-2 py-0.5 rounded border border-gray-200">
                          任意
                        </span>
                      </div>
                      <textarea
                        name="comment"
                        value={formData.comment}
                        onChange={handleInputChange}
                        rows={5}
                        className="form-input-v2"
                        placeholder="ご質問やご要望があればご記入ください"
                      ></textarea>
                    </div>

                    {/* Privacy Policy */}
                    <div className="pt-4 text-center text-xs text-slate-500 space-y-2">
                      <p className="font-bold text-gray-600">
                        個人情報の取り扱いについて
                      </p>
                      <p>
                        お客様よりご登録いただいた個人情報は、弊社から事務的な連絡事項を通知するためにのみ使用します。
                      </p>
                      <p>
                        ※
                        個人情報の取り扱いに同意される方のみ、上記の内容で応募してください。
                      </p>
                    </div>

                    <div className="pt-6 text-center">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`bg-botanical-primary text-white py-4 px-12 rounded-full font-bold shadow-lg hover:bg-opacity-90 transition-all ${
                          isSubmitting ? "opacity-50" : ""
                        }`}
                      >
                        {isSubmitting ? "送信中..." : "上記の内容で応募する"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </section>
          </>
        )}
      </div>
    </Layout>
  );
};

// --- Sub-Components ---

const RequirementRow: React.FC<{
  label: string;
  content: string;
  isLast?: boolean;
}> = ({ label, content, isLast }) => (
  <div
    className={`flex flex-col md:flex-row border-b ${
      isLast ? "border-transparent" : "border-gray-100"
    } py-6 group hover:bg-gray-50/50 transition-colors rounded-lg px-4`}
  >
    <div className="md:w-48 shrink-0 mb-3 md:mb-0">
      <span className="font-bold text-gray-700 block relative pl-3 before:absolute before:left-0 before:top-1.5 before:w-1 before:h-4 before:bg-salon-gold before:rounded-full">
        {label}
      </span>
    </div>
    <div className="grow">
      <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
        {content}
      </p>
    </div>
  </div>
);

const StepItem: React.FC<{ number: string; title: string; desc: string }> = ({
  number,
  title,
  desc,
}) => (
  <div className="flex-1 relative z-10 flex flex-col items-center text-center">
    <div className="w-12 h-12 bg-white text-salon-gold border-2 border-salon-gold rounded-full flex items-center justify-center font-bold text-xl mb-4 shadow-sm">
      {number}
    </div>
    <h4 className="font-bold text-gray-800 mb-2">{title}</h4>
    <p className="text-xs text-gray-500">{desc}</p>
  </div>
);

const FormField: React.FC<{
  label: string;
  required?: boolean;
  children: React.ReactNode;
}> = ({ label, required, children }) => (
  <div>
    <div className="flex items-center gap-2 mb-2">
      <label className="text-sm font-bold text-gray-700">{label}</label>
      {required && (
        <span className="bg-salon-pink text-white text-[10px] px-2 py-0.5 rounded">
          必須
        </span>
      )}
    </div>
    {children}
  </div>
);

export default RecruitmentPage;
