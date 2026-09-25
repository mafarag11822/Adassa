import React from "react";
import { Link, useParams } from "react-router-dom";
import posts from "../data/posts";
import { FaCamera, FaLink, FaShareNodes } from "react-icons/fa6";
import {
  FaChevronLeft,
  FaEnvelope,
  FaImages,
  FaLinkedinIn,
  FaList,
  FaLongArrowAltLeft,
  FaRegClock,
  FaTags,
  FaWhatsapp,
} from "react-icons/fa";
import { RiHome4Fill } from "react-icons/ri";
import { BsTwitterX } from "react-icons/bs";
import { CiCalendar } from "react-icons/ci";

export default function PostDetails() {
  const { slug } = useParams();
  function ArticleContent({ content }) {
    return (
      <div className="prose">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    );
  }
  return (
    <main className="grow pt-20">
      {posts.posts
        .filter((post) => post.slug === slug)
        .map((ele) => {
          const contentSections =
            typeof ele.content === "string"
              ? ele.content.split(/\n\n(?=## )/).map((section) => {
                  if (section.startsWith("## ")) {
                    const lines = section.split("\n\n");
                    return {
                      heading: lines[0].replace("## ", "").trim(),
                      text: lines.slice(1).join("\n\n").trim(),
                    };
                  }
                  return { heading: null, text: section.trim() };
                })
              : [];
          return (
            <article key={ele.id || ele.slug} className="bg-[#0a0a0a] min-h-screen">
              <div className="relative h-[60vh] min-h-125 overflow-hidden">
                <img
                  alt={ele.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  src={ele.image}
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
                <div className="absolute inset-0 bg-linear-to-r from-[#0a0a0a]/30 to-transparent" />
                <div className="absolute top-8 right-8 left-8">
                  <nav className="inline-flex items-center gap-2 px-4 py-2 bg-black/30 backdrop-blur-md rounded-full text-sm border border-white/10">
                    <Link
                      className="text-white/70 hover:text-white transition-colors"
                      to="/"
                      data-discover="true"
                    >
                      <RiHome4Fill />
                    </Link>
                    <FaChevronLeft className="text-white/30 text-xs" />
                    <Link
                      className="text-white/70 hover:text-white transition-colors"
                      to="/blog"
                      data-discover="true"
                    >
                      المدونة
                    </Link>
                    <FaChevronLeft className="text-white/30 text-xs" />
                    <span className="text-orange-400 font-medium truncate max-w-50">
                      {ele.category}
                    </span>
                  </nav>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                  <div className="max-w-5xl mx-auto">
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                      <Link
                        className="px-4 py-2 bg-orange-500 text-white text-sm font-bold rounded-full hover:bg-orange-600 transition-colors"
                        to="/blog?category=إضاءة"
                        data-discover="true"
                      >
                        {ele.category}
                      </Link>
                      <div className="flex items-center gap-4 text-white/70 text-sm">
                        <span className="flex items-center gap-2">
                          <CiCalendar />
                          {ele.date}
                        </span>
                        <div className="flex items-center gap-2">
                          <FaRegClock />
                          {ele.readTime}
                        </div>
                      </div>
                    </div>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl">
                      {ele.title}
                    </h1>
                    <div className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 w-fit">
                      <img
                        alt={ele.author.name}
                        className="w-14 h-14 rounded-full object-cover ring-2 ring-orange-500/50"
                        src={ele.author.avatar}
                      />
                      <div>
                        <p className="font-bold text-white">
                          {ele.author.name}
                        </p>
                        <p className="text-sm text-white/60">
                          {ele.author.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid lg:grid-cols-[1fr_300px] gap-12">
                  <div className="order-2 lg:order-1">
                    <div className="p-6 bg-linear-to-r from-orange-500/10 to-yellow-500/5 rounded-2xl border border-orange-500/20 mb-10">
                      <p className="text-lg text-neutral-200 leading-relaxed italic">
                        {ele.excerpt}
                      </p>
                    </div>
                    <div className="prose-custom">
                {contentSections.map((sec, index) => (
                  <React.Fragment key={index}>
                    {sec.heading && (
                      <h2
                        id={`section-${index}`}
                        className="text-2xl md:text-3xl font-bold text-white mt-14 mb-6 flex items-center gap-4 scroll-mt-24"
                      >
                        <span className="flex items-center justify-center w-10 h-10 bg-orange-500/10 rounded-xl border border-orange-500/30">
                          <FaCamera className="text-orange-500" />
                        </span>
                        {sec.heading}
                      </h2>
                    )}
                    {sec.text && (
                      <p className="text-neutral-300 leading-relaxed mb-6 text-lg whitespace-pre-line">
                        {sec.text}
                      </p>
                    )}
                  </React.Fragment>
                ))}
              </div>
                    
                    <div className="mt-14 p-6 bg-[#111111] rounded-2xl border border-[#262626]">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center border border-orange-500/30">
                          <FaTags className="text-orange-500" />
                        </div>
                        <h3 className="font-bold text-white">الوسوم</h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {ele.tags.map((tag) => (
                          <span className="px-4 py-2 bg-[#1a1a1a] text-neutral-400 text-sm rounded-full border border-[#262626] hover:border-orange-500/50 hover:text-orange-500 transition-colors cursor-pointer">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-6 p-6 bg-[#111111] rounded-2xl border border-[#262626]">
                      <div className="flex items-center justify-between flex-wrap gap-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center border border-orange-500/30">
                            <FaShareNodes className="text-orange-500" />
                          </div>
                          <h3 className="font-bold text-white">شارك المقال</h3>
                        </div>
                        <div className="flex gap-2">
                          <button className="w-11 h-11 bg-[#1a1a1a] border border-[#262626] rounded-xl flex items-center justify-center text-neutral-400 hover:bg-[#1da1f2] hover:text-white hover:border-transparent transition-all duration-300">
                            <BsTwitterX />
                          </button>
                          <button className="w-11 h-11 bg-[#1a1a1a] border border-[#262626] rounded-xl flex items-center justify-center text-neutral-400 hover:bg-[#0077b5] hover:text-white hover:border-transparent transition-all duration-300">
                            <FaLinkedinIn />
                          </button>
                          <button className="w-11 h-11 bg-[#1a1a1a] border border-[#262626] rounded-xl flex items-center justify-center text-neutral-400 hover:bg-[#25d366] hover:text-white hover:border-transparent transition-all duration-300">
                            <FaWhatsapp />
                          </button>
                          <button className="w-11 h-11 bg-[#1a1a1a] border border-[#262626] rounded-xl flex items-center justify-center text-neutral-400 hover:bg-orange-500 hover:text-white hover:border-transparent transition-all duration-300">
                            <FaLink />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 p-8 bg-linear-to-br from-[#161616] to-[#111111] rounded-2xl border border-[#262626]">
                      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                        <img
                          alt={ele.author.name}
                          className="w-24 h-24 rounded-2xl object-cover ring-4 ring-orange-500/20"
                          src={ele.author.avatar}
                        />
                        <div className="text-center sm:text-right flex-1">
                          <span className="text-xs text-orange-500 font-semibold uppercase tracking-wider">
                            كاتب المقال
                          </span>
                          <h3 className="text-xl font-bold text-white mt-1">
                            {ele.author.name}
                          </h3>
                          <p className="text-neutral-500 text-sm mb-3">
                            {ele.author.role}
                          </p>
                          <p className="text-neutral-400 text-sm leading-relaxed">
                            {ele.title}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <aside className="order-1 lg:order-2">
                    <div className="lg:sticky lg:top-24 space-y-6">
                      <div className="p-6 bg-[#111111] rounded-2xl border border-[#262626]">
                        <div className="flex items-center gap-3 mb-5">
                          <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center border border-orange-500/30">
                            <FaList className="text-orange-500" />
                          </div>
                          <h3 className="font-bold text-white">
                            محتويات المقال
                          </h3>
                        </div>
                        <nav className="space-y-2">
                            {contentSections.map((sec, index) => (
                  <React.Fragment key={index}>
                    {sec.heading && (
                      <a
                            href={`#section-${index}`}
                            className="flex items-center gap-3 p-3 rounded-xl text-neutral-400 hover:text-orange-500 hover:bg-orange-500/5 transition-all duration-300 group"
                          >
                            <span className="flex items-center justify-center w-6 h-6 bg-[#1a1a1a] rounded-lg text-xs font-bold text-neutral-500 group-hover:bg-orange-500/10 group-hover:text-orange-500 transition-colors">
                              {index}
                            </span>
                            <span className="text-sm">
                              {sec.heading}
                            </span>
                          </a>
                    )}
                  </React.Fragment>
                ))}
                          
                        </nav>
                      </div>
                      <div className="p-6 bg-[#111111] rounded-2xl border border-[#262626]">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center p-4 bg-[#0a0a0a] rounded-xl">
                            <FaRegClock className="text-orange-500 text-xl mb-2 m-auto" />
                            <p className="text-white font-bold">
                              {ele.readTime}
                            </p>
                            <p className="text-neutral-500 text-xs">
                              وقت القراءة
                            </p>
                          </div>
                          <div className="text-center p-4 bg-[#0a0a0a] rounded-xl">
                            <CiCalendar className="text-orange-500 text-xl mb-2 m-auto" />
                            <p className="text-white font-bold text-sm">
                              {ele.date}
                            </p>
                            <p className="text-neutral-500 text-xs">
                              تاريخ النشر
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="p-6 bg-linear-to-br from-orange-500/10 to-yellow-500/5 rounded-2xl border border-orange-500/20">
                        <div className="text-center">
                          <div className="w-14 h-14 bg-orange-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <FaEnvelope className="text-orange-500 text-xl" />
                          </div>
                          <h3 className="font-bold text-white mb-2">
                            لا تفوّت جديدنا
                          </h3>
                          <p className="text-neutral-400 text-sm mb-4">
                            اشترك للحصول على أحدث المقالات
                          </p>
                          <Link
                            className="block w-full py-3 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 transition-colors text-center"
                            to="/blog"
                            data-discover="true"
                          >
                            تصفح المزيد
                          </Link>
                        </div>
                      </div>
                    </div>
                  </aside>
                </div>
                <div className="mt-20 pt-12 border-t border-[#262626]">
                  <div className="flex items-center justify-between mb-10">
                    <div className="flex items-center gap-4">
                      <span className="w-12 h-12 bg-orange-500/10 rounded-2xl flex items-center justify-center border border-orange-500/30">
                        <FaImages className=" text-orange-500 text-xl" />
                      </span>
                      <div>
                        <h2 className="text-2xl font-bold text-white">
                          مقالات قد تعجبك
                        </h2>
                        <p className="text-neutral-500 text-sm">
                          استكشف المزيد من المحتوى المميز
                        </p>
                      </div>
                    </div>
                    <Link
                      className="hidden sm:flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors group"
                      to="/blog"
                      data-discover="true"
                    >
                      عرض الكل
                      <FaLongArrowAltLeft className="group-hover:-translate-x-1 transition-transform" />
                    </Link>
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Link
                      className="group relative bg-[#111111] rounded-2xl overflow-hidden border border-[#262626] hover:border-orange-500/30 transition-all duration-500"
                      to="/blog/night-photography-techniques"
                      data-discover="true"
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img
                          alt="تصوير الليل والنجوم: دليلك لالتقاط سماء الليل"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=400&fit=crop"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-[#111111] to-transparent" />
                        <span className="absolute top-4 right-4 px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full">
                          إضاءة
                        </span>
                      </div>
                      <div className="p-5">
                        <h3 className="font-bold text-white group-hover:text-orange-500 transition-colors line-clamp-2 mb-3">
                          تصوير الليل والنجوم: دليلك لالتقاط سماء الليل
                        </h3>
                        <div className="flex items-center justify-between text-sm text-neutral-500">
                          <span className="flex items-center gap-2">
                            <img
                              alt="خالد الفيصل"
                              className="w-6 h-6 rounded-full"
                              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face"
                            />
                            خالد الفيصل
                          </span>
                          <span>11 دقائق للقراءة</span>
                        </div>
                      </div>
                    </Link>
                    <Link
                      className="group relative bg-[#111111] rounded-2xl overflow-hidden border border-[#262626] hover:border-orange-500/30 transition-all duration-500"
                      to="/blog/long-exposure-photography"
                      data-discover="true"
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img
                          alt="التعريض الطويل: كيف تصور الحركة والزمن"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&h=400&fit=crop"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-[#111111] to-transparent" />
                        <span className="absolute top-4 right-4 px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full">
                          إضاءة
                        </span>
                      </div>
                      <div className="p-5">
                        <h3 className="font-bold text-white group-hover:text-orange-500 transition-colors line-clamp-2 mb-3">
                          التعريض الطويل: كيف تصور الحركة والزمن
                        </h3>
                        <div className="flex items-center justify-between text-sm text-neutral-500">
                          <span className="flex items-center gap-2">
                            <img
                              alt="باسم المصري"
                              className="w-6 h-6 rounded-full"
                              src="https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?w=100&h=100&fit=crop&crop=face"
                            />
                            باسم المصري
                          </span>
                          <span>8 دقائق للقراءة</span>
                        </div>
                      </div>
                    </Link>
                    <Link
                      className="group relative bg-[#111111] rounded-2xl overflow-hidden border border-[#262626] hover:border-orange-500/30 transition-all duration-500"
                      to="/blog/flash-photography-basics"
                      data-discover="true"
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img
                          alt="أساسيات التصوير بالفلاش: تحكم كامل في الإضاءة"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&h=400&fit=crop"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-[#111111] to-transparent" />
                        <span className="absolute top-4 right-4 px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full">
                          إضاءة
                        </span>
                      </div>
                      <div className="p-5">
                        <h3 className="font-bold text-white group-hover:text-orange-500 transition-colors line-clamp-2 mb-3">
                          أساسيات التصوير بالفلاش: تحكم كامل في الإضاءة
                        </h3>
                        <div className="flex items-center justify-between text-sm text-neutral-500">
                          <span className="flex items-center gap-2">
                            <img
                              alt="ماجد القحطاني"
                              className="w-6 h-6 rounded-full"
                              src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=100&h=100&fit=crop&crop=face"
                            />
                            ماجد القحطاني
                          </span>
                          <span>8 دقائق للقراءة</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
    </main>
  );
}
