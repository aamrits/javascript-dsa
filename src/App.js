import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import topicsList from "./data/TopicsList";
import ReverseArray from "./Pages/Arrays/ReverseArray";
import MoveNegativeToLeft from "./Pages/Arrays/MoveNegativeToLeft";
import MinMaxElement from "./Pages/Arrays/MinMaxElement";
import SortArrayZerosOnesTwos from "./Pages/Arrays/SortArrayZerosOnesTwos";
import RemoveDuplicateChars from "./Pages/Strings/RemoveDuplicateChars";
import BubbleSort from "./Pages/Sorting/BubbleSort";
import InsertionSort from "./Pages/Sorting/InsertionSort";
import MergeSort from "./Pages/Sorting/MergeSort";
import QuickSort from "./Pages/Sorting/QuickSort";
import SelectionSort from "./Pages/Sorting/SelectionSort";
import CheckPalindrome from "./Pages/Misc/CheckPalindrome";
import CheckPrime from "./Pages/Misc/CheckPrime";
import ConstructPyramid from "./Pages/Misc/ConstructPyramid";
import ConvertDecimalToHexadecimal from "./Pages/Misc/ConvertDecimalToHexadecimal";
import CurryingExample from "./Pages/Misc/CurryingExample";
import FindFactorial from "./Pages/Misc/FindFactorial";
import PerimeterSumMatrix from "./Pages/Misc/PerimeterSumMatrix";
import ReconstructObject from "./Pages/Misc/ReconstructObject";

function App() {
  return (
    <Router>
      <div className="bg-gray-500">
        <Header />

        <section>
          <div className="flex flex-row gap-8">
            {/* Routes */}
            <div className="basis-5/12">
              {topicsList &&
                topicsList.map((topic) => (
                  <div className="">
                    <input type="radio" name="my-accordion-3" />
                    <div className="">
                      {topic.topic_name}
                    </div>
                    <div className="">
                      <ul className="menu bg-base-200 rounded-box w-full">
                        {topic.questions.map((question) => (
                          <li className="flex">
                            <Link to={"/" + question.link}>
                              {question.title}
                            </Link>

                            <span
                              className={
                                question.difficulty === "easy"
                                  ? "w-8 inline-flex items-center rounded-md bg-green-500 px-2 py-1 text-xs font-medium text-white"
                                  : question.difficulty === "medium"
                                    ? "w-8 inline-flex items-center rounded-md bg-yellow-500 px-2 py-1 text-xs font-medium text-white"
                                    : "w-8 inline-flex items-center rounded-md bg-red-500 px-2 py-1 text-xs font-medium text-white"
                              }
                            >
                              {question.difficulty === "easy"
                                ? "E"
                                : question.difficulty === "medium"
                                  ? "M"
                                  : "H"}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
            </div>

            {/* Git Gists */}
            <div className="basis-7/12">
              <Routes>
                <Route exact path="/" />
                <Route path="/reverse-array" element={<ReverseArray />} />
                <Route
                  path="/max-min-element-of-array"
                  element={<MinMaxElement />}
                />
                <Route
                  path="/move-negative-numbers-to-left"
                  element={<MoveNegativeToLeft />}
                />
                <Route
                  path="/sort-array-0s-1s-2s"
                  element={<SortArrayZerosOnesTwos />}
                />
                <Route
                  path="/remove-duplicate-characters-of-a-string"
                  element={<RemoveDuplicateChars />}
                />
                <Route path="/bubble-sort" element={<BubbleSort />} />
                <Route path="/insertion-sort" element={<InsertionSort />} />
                <Route path="/merge-sort" element={<MergeSort />} />
                <Route path="/quick-sort" element={<QuickSort />} />
                <Route path="/selection-sort" element={<SelectionSort />} />
                <Route path="/check-palindrome" element={<CheckPalindrome />} />
                <Route path="/check-prime" element={<CheckPrime />} />
                <Route
                  path="/construct-a-pyramid"
                  element={<ConstructPyramid />}
                />
                <Route
                  path="/convert-from-decimal-to-hexadecimal"
                  element={<ConvertDecimalToHexadecimal />}
                />
                <Route
                  path="/currying-with-example"
                  element={<CurryingExample />}
                />
                <Route path="/find-factorial" element={<FindFactorial />} />
                <Route
                  path="/sum-of-perimeter-of-matrix"
                  element={<PerimeterSumMatrix />}
                />
                <Route
                  path="/reconstruct-an-object"
                  element={<ReconstructObject />}
                />
              </Routes>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
