// hooks/useSearchQuestions.jsx
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function useSearchQuestions() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [questions, setQuestions] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ Этот эффект должен срабатывать при КАЖДОМ изменении searchParams
  useEffect(() => {
    console.log("🔔 searchParams ИЗМЕНИЛИСЬ:", searchParams.toString()); // Должно появляться при каждом изменении

    const fetchQuestions = async () => {
      setLoading(true);

      const page = searchParams.get("page") || "1";
      const keywords = searchParams.get("keywords") || "";
      const specializationSlug = searchParams.get("specializationSlug") || "";
      const skills = searchParams.get("skills") || "";
      const complexity = searchParams.get("complexity") || "";
      const rate = searchParams.get("rate") || "";
      const status = searchParams.get("status") || "";

      let url = `https://api.yeatwork.ru/questions/public-questions?page=${page}&limit=10`;

      if (keywords.trim())
        url += `&keywords=${encodeURIComponent(keywords.trim())}`;
      if (specializationSlug)
        url += `&specializationSlug=${specializationSlug}`;
      if (skills) url += `&skills=${skills}`;
      if (complexity) url += `&complexity[]=${complexity}`;
      if (rate) url += `&rate[]=${rate}`;
      if (status) url += `&status[]=${status}`;

      console.log("🌐 ЗАПРОС К API:", url);

      try {
        const response = await fetch(url);
        const data = await response.json();
        setQuestions(data);
      } catch (error) {
        console.error("Ошибка:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [searchParams]); // ✅ ЗАВИСИМОСТЬ от searchParams

  const filters = {
    keywords: searchParams.get("keywords") || "",
    pageNumber: parseInt(searchParams.get("page") || "1"),
    selectedSpec: searchParams.get("specializationSlug") || "",
    selectedSkill: searchParams.get("skills") || "",
    selectedLevels: searchParams.get("complexity") || "",
    selectedRating: searchParams.get("rate") || "",
    selectedStatus: searchParams.get("status") || "",
  };

  // ✅ updateFilters должен ОБНОВЛЯТЬ searchParams, а не делать fetch напрямую
  const updateFilters = (newFilters) => {
    const updatedParams = new URLSearchParams(searchParams);

    Object.entries(newFilters).forEach(([key, value]) => {
      const paramKey = key === "pageNumber" ? "page" : key;
      if (value && value !== "" && value !== null && value !== "all") {
        updatedParams.set(paramKey, value);
      } else if (key !== "pageNumber") {
        updatedParams.delete(paramKey);
      }
    });

    if (
      newFilters.pageNumber === undefined &&
      Object.keys(newFilters).length > 0
    ) {
      updatedParams.set("page", "1");
    }

    console.log("🔄 updateFilters, новый URL:", updatedParams.toString());
    setSearchParams(updatedParams); // ← ТОЛЬКО ЭТО! fetch сам сработает из-за зависимости
  };

  return { filters, questions, updateFilters, loading };
}

export default useSearchQuestions;
